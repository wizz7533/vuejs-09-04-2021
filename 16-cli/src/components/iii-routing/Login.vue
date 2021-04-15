<template>
    <div>
        <form action="" @submit.prevent="connexion($event)">
            <fieldset>
                <legend>Connexion</legend>
                <label for="">Email</label>
                <input type="text" name="email" placeholder="j.doe@exemple.fr"/>
                <br/>
                <label for="">Mot de passe</label>
                <input type="password" name="password"/>
                <br/>
                
                <input type="submit" value="Se Connecter">
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            connexion(event) {
                const email = event.target.email.value;
                const mdp = event.target.password.value;
                console.log(email, mdp);
            }
        }
    }
</script>

<style scoped>
</style>