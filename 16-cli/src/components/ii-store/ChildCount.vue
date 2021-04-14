<template>
    <div>
        <h3>ChildCount: {{childCount}}</h3>
    </div>
</template>

<script>
    export default {
        props: ['count'],
        data() {
            return {
                childCount: this.count
            }
        },
    }
</script>