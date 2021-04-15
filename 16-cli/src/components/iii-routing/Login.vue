<template>
    <div>
        <form action="" @submit.prevent="connexion($event)">
            <fieldset>
                <legend>Connexion</legend>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="j.doe@exemple.fr"/>
                <br/>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password"/>
                <br/>
                
                <input type="submit" value="Se Connecter">
            </fieldset>
        </form>
    </div>
</template>

<script>
    import userStore from '@/store/user';
    export default {
        methods: {
            connexion(event) {
                const email = event.target.email.value;
                const mdp = event.target.password.value;
                userStore.login(email, mdp);
                this.$router.push('/admin');
            }
        }
    }
</script>

<style scoped>
</style>