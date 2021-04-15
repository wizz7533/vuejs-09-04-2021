<template>
    <div>
        <h1>Page d'administration</h1>
        <button @click="deco">Deconnexion</button>
    </div>
</template>

<script>
    import userStore from '@/store/user';
    export default {
        methods: {
            deco() {
                userStore.logout();
                this.$router.push('/login');
            }
        }        
    }
</script>

<style scoped>

</style>