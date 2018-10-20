<template>
    <div class="row py-5" v-if="dataLoader">
        <div class="col-md-8 offset-md-2">
            <h3>"{{ mutableTeam.team.name }}" team players:</h3>
            <div class="row my-5">
                <div v-if="addablePlayer === true">
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
                                    <div class="form-group col-md-6">
                                        <label for="firstname">First Name:</label>
                                        <input type="text" class="form-control" name="firstname" id="firstname" @keyup="verify(player)" v-model="player.first_name"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="lastname">Last Name:</label>
                                        <input type="text" class="form-control" name="lastname" id="lastname" @keyup="verify(player)" v-model="player.last_name"/>
                                    </div>
                                    <div class="col-md-12 text-center border-top pt-3">
                                        <button class="btn btn-warning" @click="addablePlayer = false">cancel</button>
                                        <button class="btn btn-success" :disabled="!validated" @click="addPlayer(player)">finish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="col-md-12">
                        <button class="btn btn-success" @click="addablePlayer = true" title="Add a new player to this team">Add a new player</button>
                    </div>
                </div>
            </div>
            <div v-if="showPlayers.length>0" class="row mt-5">
                    <player-component v-for="(player,index) in showPlayers"
                                      v-bind:player="player"
                                      v-bind:index="index"
                                      v-bind:key="player.id">
                    </player-component>
            </div>
            <div class="row mt-5" v-else>
                <div class="col-md-12">
                    <div class="well-lg">Currently this team doesn't have any player</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from './../../auth'
    import router from './../../router/index'
    import PlayerComponent from './PlayerComponent'
    const auth = router.app.$options.store.state.auth
    export default {
        name: "team-component",
        props: ['teamId','Team','Players','dataLoaded'],
        components: {
            PlayerComponent
        },
        data(){
            return {
                player: {
                    first_name: '',
                    last_name: ''
                },
                showPlayers: '',
                mutableTeamId: this.teamId,
                dataLoader: this.dataLoaded,
                mutableTeam: this.Team,
                addablePlayer: false,
                validated: true,
                errors: null,
                singleError: null
            }
        },
        mounted() {
            this.fetchTeam();
            this.validated = false;
        },
        methods: {
            fetchTeam: function(){
                axios.get('/api/v1/team/'+ this.teamId,{
                    headers: {
                        Authorization: 'Bearer ' + auth.accessToken
                    }
                }).then(response =>{
                    this.mutableTeam = response.data;
                    this.showPlayers = response.data.team.players;
                    this.dataLoader = true;
                }).catch(error =>{
                    if (error.response.data.error == 'token_expired'){
                        Auth._refreshToken(error);
                    }
                    console.log(error.response.data.error);
                })
            },
            addPlayer(player) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
                axios.post('/api/v1/team/'+ this.mutableTeamId +'/player/',{
                    team_id: this.mutableTeamId,
                    first_name: player.first_name,
                    last_name: player.last_name,
                }).then(response => {
                    if(response.data.success === true){
                        this.showPlayers.unshift(response.data.payload);
                        this.addablePlayer = false;
                        this.errors = '';
                        this.singleError = null;
                    }
                    if(response.data.success === false){
                        this.errors = response.data.error;
                    } else if(response.data.error === 'token_expired'){
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
            verify(player){
                if (player.first_name.length === 0 && player.last_name.length === 0) {
                    this.validated = false
                } else if(player.first_name.length === 0 || player.last_name.length === 0){
                    this.validated = false
                }else{
                    this.validated = true
                }
            }
        },
    }

</script>


<style scoped>
    .navbar{
        background-color: #c6d5ef;
    }
    .active{
        border-bottom: 1px solid #000000;
        color: cornflowerblue !important;
    }
</style>
