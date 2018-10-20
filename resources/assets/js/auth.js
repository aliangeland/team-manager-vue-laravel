import Vue from 'vue'
import router from './router/index'
import store from './store/index'

const LOGIN_URL = '/api/v1/user/login'

const REFRESH_TOKEN_URL = '/api/v1/user/refresh'

const AUTH_BASIC_HEADERS = {
  headers: {
    'Authorization': 'Basic '
  },
  emulateJSON: true
}

/* Auth Plugin */
export default {

/* Vue resource http interceptor */
  install (Vue, options) {
    Vue.http.interceptors.push((request, next) => {
      console.log(request);
      const token = store.state.auth.token
      const hasAuthHeader = request.headers.has('Authorization')
      if (token && !hasAuthHeader) {
        this.setAuthHeader(request)
      }
      next((response) => {
        if (this._isInvalidToken(response)) {
          return this._refreshToken(request)
        }
      })
    })
    Vue.prototype.$auth = Vue.auth = this
  },

  /* Login action */
  login (creds, redirect) {
    const params = { 'email': creds.email, 'password': creds.password }
    return Vue.http.post(LOGIN_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
          if (response.data.token){
            this._storeToken(response);
              if (redirect) {
                  router.push({ name: redirect })
              }
          }
        return response
      })
      .catch((errorResponse) => {
        console.log(errorResponse);
        return errorResponse
      })
  },

  /* Logout action */
  logout () {
    store.commit('CLEAR_ALL_DATA')
    router.push({ name: 'login' })
  },

  /* Setting Authentication headers */
  setAuthHeader (request) {
    request.headers.set('Authorization', 'Bearer ' + store.state.auth.accessToken)
    request.params.access_token = store.state.auth.accessToken
  },

  /* Retrying the token request */
  _retry (request) {
    this.setAuthHeader(request)

    return Vue.http(request)
      .then((response) => {
        return response
      })
      .catch((response) => {
        return response
      })
  },

  /* Token refresh action */
  _refreshToken (request) {
    const AUTH_BASIC_HEADERS = {
      headers: {
          'Authorization': 'Bearer ' +store.state.auth.accessToken
      }
    }
    return Vue.http.get(REFRESH_TOKEN_URL, AUTH_BASIC_HEADERS)
      .then((result) => {
        this._storeToken(result)
        return this._retry(request)
      })
      .catch((errorResponse) => {
        if (this._isInvalidToken(errorResponse)) {
          this.logout()
        }
        return errorResponse
      })
  },

  /* Storing tokens */
  _storeToken (response) {
    const auth = store.state.auth
    auth.isLoggedIn = true
    auth.accessToken = response.body.token
    auth.refreshToken = response.body.token
    store.commit('UPDATE_AUTH', auth)
  },

  /* Check if token is invalid */
  _isInvalidToken (response) {
    const status = response.status
    const error = response.data.error
    return (status === 401 && (error === 'invalid_token' || error === 'expired_token'))
  }
}
