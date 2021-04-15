<template>
    <div>
        <p>Id: {{ identifiant }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                identifiant: this.$route.params.id
            }
        },
    }
</script>

<style scoped>

</style>