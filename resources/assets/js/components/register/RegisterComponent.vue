<template>
    <div class="row mx-0 mt-5 px-0">
        <div class="login-comp col-sm-4 offset-sm-2">
            <spinner v-show="signingUp" message="Signing Up..."></spinner>
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
                        type="text"
                        data-id="register.name"
                        class="form-control"
                        placeholder="Enter your name"
                        v-model="name"
                >
            </div>
            <div class="form-group">
                <input
                        type="email"
                        data-id="register.email"
                        class="form-control"
                        placeholder="Enter your email"
                        v-model="email"
                >
            </div>
            <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        v-model="password"
                >
            </div>
            <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Repeat your password"
                        v-model="password_confirmation"
                >
            </div>
            <button
                    data-id="register.submit"
                    class="btn btn-primary solid blank"
                    @click="submitRegister()"
            >
                Register &nbsp; <i class="fa fa-arrow-circle-o-right"></i>
            </button>
            <br><br><br>
            Do have an account? &nbsp;<a @click="redirect('/login/')">Login Here.</a>

        </div>
        <div class="col-sm-4">
            <img class="img-fluid" v-bind:src="img" />
        </div>
    </div>
</template>

<script>
    import Spinner from './../../components/extra/Spinner'

    export default {
        name: 'register-component',
        components: { Spinner },
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                loggingIn: false,
                signingUp: false,
                errors: '',
                singleError: null,
                img: require('./../../assets/images/teammanager1.png'),
            }
        },
        methods: {
            submitRegister(){
                this.signingUp = true
                axios.post('/api/v1/user/register',{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }).then(response =>{
                    console.log(response.data);
                    this.signingUp = false
                    if(response.data.success === true){
                        this.loggingIn = true
                        const credentials = {
                            email: this.email,
                            password: this.password
                        }
                        this.$auth.login(credentials, 'dashboard').then((response) => {
                        this.loggingIn = false
                        })
                    }else{
                        this.singleError = null;
                        this.errors = response.data.error;
                    }
                }).catch(error =>{
                    this.errorMessage = error.response.data.error;
                });
            },
            redirect(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .register-comp {
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