<template>
    <div>
        <h2>Le Store</h2>
        <h3>Compteur: {{ count }}</h3>
        <child-count v-bind:count="count">

        </child-count>
    </div>
</template>

<script>
import ChildCount from './ChildCount.vue'
export default {
    data() {
        return {
            count: 0
        }
    },
    components: { 
        ChildCount 
    }
}   
</script>