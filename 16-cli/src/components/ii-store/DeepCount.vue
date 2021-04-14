<template>
    <div>
        <h4>DeepCount: {{ deepCount }}</h4>
        <button>Incrementer</button>
    </div>
</template>

<script>
    export default {
        props: ['childCount'],
        data() {
            return {
                deepCount: this.childCount
            }
        },
    }
</script>

<style scoped>

</style>