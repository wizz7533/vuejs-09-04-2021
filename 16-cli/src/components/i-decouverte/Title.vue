<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
// export default { data() {}, methods: {}, computed: {}}
const Title = {
    data() {
        return {
            message: 'Salut !'
        }
    },
    methods: {},
    computed: {}
}
export default Title;
</script>

<style>
    h1 {
        color: red;
    }
</style>