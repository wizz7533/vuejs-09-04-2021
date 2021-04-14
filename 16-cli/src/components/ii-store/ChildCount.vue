<template>
    <div>
        <h3>
            ChildCount: {{childCount}}
        </h3>
        <deep-count :childCount="childCount"></deep-count>
    </div>
</template>

<script>
import DeepCount from './DeepCount.vue'
    export default {
        props: ['count'],
        data() {
            return {
                childCount: this.count
            }
        },
        components: { DeepCount },
    }
</script>