<template>
    <div class="row py-5">
        <div class="col-md-8 offset-md-2">
            <h1>Teams</h1>
            <div class="row my-5">
                <div v-if="addableTeam === true">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12" v-if="errors">
                                        <div class="alert alert-danger">
                                            <div v-for="e in errors">
                                                <p>{{ e.toString() }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="name">Team Name:</label>
                                        <input type="text" class="form-control" name="name" id="name" @keyup="verify(team)" v-model="team.name"/>
                                    </div>
                                    <div class="col-md-12 text-center border-top pt-3">
                                        <button class="btn btn-warning" @click="addableTeam = false">cancel</button>
                                        <button class="btn btn-success" :disabled="!validated" @click="addTeam(team)">finish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="col-md-12">
                        <button class="btn btn-success" @click="addableTeam = true" title="Add a new team">Add a new team</button>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-6 mt-3" v-for="team in mutableList">
                    <div class="card mt-2 text-center">
                        <div class="card-body">
                            <h6 class="card-title py-1">{{ team.name }}</h6>
                        </div>
                        <div class="card-footer py-3">
                            <a @click="redirect('/team/'+ team.id)">View Players</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from './../../auth'
    import router from './../../router/index'
    const auth = router.app.$options.store.state.auth
    export default {
        name: "dashboard-component",
        props: ['list','dataLoaded'],
        data(){
            return {
                team: {
                    id:'',
                    name:''
                },
                mutableList: this.list,
                errors: null,
                singleError: null,
                addableTeam: false,
                validated: null
            }
        },
        mounted(){
            this.fetchTeams();
            this.validated = false;
        },
        methods:{
            fetchTeams(){
                axios.get('/api/v1/teams',{
                    headers: {
                        Authorization: 'Bearer ' + auth.accessToken
                    }
                }).then(response =>{
                    this.mutableList = response.data.payload;
                    console.log(this.mutableList);
                }).catch(error =>{
                    if (error.response.data.error === 'token_expired'){
                        Auth._refreshToken(error);
                    }
                    console.log(error.response.data.error);
                })
            },
            addTeam(team) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
                axios.post('/api/v1/team/',{
                    name: team.name,
                }).then(response => {
                    if(response.data.success === true){
                        this.mutableList.unshift(response.data.payload);
                        this.addableTeam = false;
                        this.errors = '';
                        this.singleError = null;
                    }
                    if(response.data.success === false){
                        this.errors = response.data.error;
                    }else if(response.data.error === 'token_expired'){
                        this.errors = '';
                        this.singleError = 'Token Expired, please refresh the page to refresh the token';
                    }else{
                        this.singleError = null;
                        this.errors = response.data.error;
                    }
                }).catch(error => {
                    if (error.response.data.error === 'token_expired'){
                        Auth._refreshToken(error);
                    }
                    console.log(error.response.data.error);
                    this.errors = error.response.data.error;
                })
            },
            verify(team){
                if (team.name.length === 0) {
                    this.validated = false
                }else{
                    this.validated = true
                }
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
    }
    a:not([href]):not([tabindex]):hover{
        color: deepskyblue;

    }
</style>