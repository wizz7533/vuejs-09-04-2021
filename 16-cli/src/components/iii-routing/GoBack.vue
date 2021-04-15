<template>
    <div>
        <h1>Retour sur la vue précédente</h1>
        <button @click="retour">Retour</button>
        <button @click="retourAccueil">Acceuil</button>
    </div>
</template>

<script>
    export default {
        methods: {
            retour() {
                this.$router.go(-1);
            },
            retourAccueil() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>