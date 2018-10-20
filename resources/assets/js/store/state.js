// set the saved key in localStorage
export const STORAGE_KEY = 'manageTeamProject'

let syncedData = {
  auth: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null
  },
  user: {
    name: null
  }
}

const notSyncedData = {
  appnav: {
    searchText: '',
    searchTimestamp: null
  }
}

// Sync with local storage.
if (localStorage.getItem(STORAGE_KEY)) {
  syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

// Merge data and export it.
export const state = Object.assign(syncedData, notSyncedData)
