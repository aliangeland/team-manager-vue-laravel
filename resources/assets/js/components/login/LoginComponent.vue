<template>
    <div class="row mx-0 mt-5 px-0">
        <div class="col-sm-4 offset-sm-2">
            <img class="img-fluid" v-bind:src="img" />
        </div>
        <div class="login-comp col-sm-4">
            <spinner v-show="loggingIn" message="Logging in..."></spinner>
            <div class="alert alert-danger" v-if="errors && errors !== ''">
                <ul>
                    <li v-for="e in errors">{{ e.toString() }}</li>
                </ul>
            </div>
            <div class="alert alert-danger" v-else-if="singleError">
                <p>{{ singleError }}</p>
            </div>
            <div class="form-group">
                <input
                        type="email"
                        data-id="login.email"
                        class="form-control"
                        placeholder="Enter your email"
                        v-model="credentials.email"
                >
            </div>
            <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        v-model="credentials.password"
                >
            </div>
            <button
                    data-id="login.submit"
                    class="btn btn-primary solid blank"
                    @click="submit()"
            >
                Login &nbsp; <i class="fa fa-arrow-circle-o-right"></i>
            </button>
            <br><br><br>
            Don’t have an account? &nbsp;<a @click="redirect('/register/')">Sign up here.</a>

        </div>
    </div>
</template>

<script>
    import Spinner from './../../components/extra/Spinner'

    export default {
        name: 'login',
        components: { Spinner },

        data () {
            return {
                credentials: {
                    email: '',
                    password: ''
                },
                loggingIn: false,
                errors: '',
                singleError: null,
                img: require('./../../assets/images/teammanager.png'),
            }
        },
        methods: {
            submit () {
                this.loggingIn = true
                const credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                }
                this.$auth.login(credentials, 'dashboard').then((response) => {
                    this.loggingIn = false
                    if(response.statusText === 'Unauthorized'){
                        this.errors = '';
                        this.singleError = response.data.error;
                    }else{
                        this.singleError = null;
                        this.errors = response.data.error;
                    }
                })
            },
            redirect(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .login-comp {
        margin-top: 100px;
        margin-bottom: 100px;
    }
    a:not([href]):not([tabindex]) {
        transition: 0.5s color;
        color: royalblue;
        cursor: pointer;
    }
    a:not([href]):not([tabindex]):hover{
        color: deepskyblue;

    }
</style>
