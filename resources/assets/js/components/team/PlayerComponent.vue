<template>
    <div class="col-md-6">
        <div class="card mt-3 text-center">
            <div class="card-body">
                <div class="alert alert-danger" v-if="errors">
                    <div v-for="e in errors">
                        <p>{{ e.toString() }}</p>
                    </div>
                </div>
                <h6 class="card-title py-1">{{ mutablePlayer.first_name }} {{ mutablePlayer.last_name }}</h6>
            </div>
            <div class="card-footer py-3">
                <div v-if="editablePlayer === mutablePlayer.id">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="firstname">First Name:</label>
                            <input type="text" class="form-control" name="firstname" id="firstname" @keyup.enter="editPlayer(mutablePlayer)" @keyup="verify(mutablePlayer)" v-model="mutablePlayer.first_name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Last Name:</label>
                            <input type="text" class="form-control" name="lastname" id="lastname" @keyup.enter="editPlayer(mutablePlayer)" @keyup="verify(mutablePlayer)" v-model="mutablePlayer.last_name"/>
                        </div>
                        <div class="col-md-12 text-center border-top pt-3">
                            <button class="btn btn-warning" @click="editablePlayer = null | cancel()">cancel</button>
                            <button class="btn btn-success" :disabled="!validated" @click="editPlayer(mutablePlayer)">save</button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <button class="btn btn-danger" @click="deletePlayer(mutablePlayer.id,index)">Delete</button>
                    <button class="btn btn-info" @click="editablePlayer = mutablePlayer.id">Edit</button>
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
        name: "PlayerComponent",
        props:['player','index'],
        data(){
            return {
                mutableTeam: this.Team,
                mutablePlayer: this.player,
                samplePlayer: {
                    id: '',
                    first_name: '',
                    last_name:''
                },
                editablePlayer: null,
                validated: true,
                cachedUser: null,
                errors: null,
                singleError: null
            }
        },
        mounted() {
            this.cachedUser = Object.assign({}, this.player);
        },
        methods: {
            cancel(){
                this.mutablePlayer = Object.assign({}, this.cachedUser);
                this.errors = null;
                this.singleError = null;
            },
            editPlayer(player) {
                this.errors = null;
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
                axios.patch('/api/v1/player/'+player.id,{
                    body: player
                }).then(response => {
                    if(response.data.success === false){
                        this.mutablePlayer = Object.assign({}, this.cachedUser);
                        this.errors = response.data.error;
                    } else if(response.data.error === 'token_expired'){
                        this.errors = '';
                        this.singleError = 'Token Expired, please refresh the page to refresh the token';
                    }else{
                        this.singleError = null;
                        this.errors = response.data.error;
                    }
                    this.cachedUser = Object.assign({}, player);
                    this.editablePlayer = null;
                }).catch(error => {
                    if (error.response.data.error === 'token_expired'){
                        Auth._refreshToken(error);
                    }
                    this.errors = error.response.data.error;
                    console.log(this.errors);
                })
            },
            deletePlayer(id,index) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
                axios.delete('/api/v1/player/'+id).then(response => {
                    console.log(response.data);
                    this.$parent.mutablePlayers.splice(index, 1);
                }).catch(error => {
                    if (error.response.data.error === 'token_expired'){
                        Auth._refreshToken(error);
                    }
                    console.log(error.response.data.error);
                })
            },
            verify(mutablePlayer){
                if (mutablePlayer.first_name.length === 0 && mutablePlayer.last_name.length === 0) {
                    this.validated = false
                } else if(mutablePlayer.first_name.length === 0 || mutablePlayer.last_name.length === 0){
                    this.validated = false
                }else{
                    this.validated = true
                }
            }
        },
    }
</script>

<style scoped>

</style>