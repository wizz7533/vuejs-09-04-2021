<template>
    <div>
        <form class="col-sm-5 m-auto" @submit.prevent="">
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="mdp">Mot de passe</label>
                <input v-model="password" type="password" class="form-control" id="mdp">
            </div>
            <button @click="login" class="btn btn-dark">Connexion</button>
        </form>
    </div>
</template>

<script>
    import userStore from '@/store/user.js'

    export default {
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            login() {
                const isLogged = userStore.login(this.email);
                if (isLogged) {
                    // this.$router.push('/protected')
                    this.$router.push({name: 'protected'})
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>