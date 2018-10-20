<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Team Manager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- logged in -->
            <template v-if="auth.isLoggedIn">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a @click="redirect('/')">Teams</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#" @click="logout()">
                            <button class="btn btn-outline-primary">Logout</button>
                        </a>
                    </li>
                </ul>
            </template>

            <!-- Not logged in -->
            <template v-else>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a @click="redirect('/login')">Login</a>
                    </li>
                    <li class="nav-item">
                        <a @click="redirect('/register')">Register</a>
                    </li>
                </ul>
            </template>
        </div>
    </nav>
</template>

<script>
import Auth from '../auth'
export default {
  name: 'nav-component',
  data () {
    return {
      auth: this.$store.state.auth,
    }
  },
  methods: {
    logout () {
      Auth.logout()
    },
    redirect(path){
        this.$router.push(path)
    }
  }
}
</script>

<style scoped>
    a:not([href]):not([tabindex]) {
        transition: 0.5s color;
        color: royalblue;
        cursor: pointer;
        padding-left: 1.5em;
    }
    a:not([href]):not([tabindex]):hover{
        color: deepskyblue;

    }
</style>
