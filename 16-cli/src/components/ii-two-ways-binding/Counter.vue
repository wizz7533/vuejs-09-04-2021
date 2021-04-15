<template>
    <div>
        <h2>Le Store</h2>
        <h3>Compteur: {{ count }}</h3>
        <!-- <child-count 
            v-bind:count="count" 
            @update:count="count = $event">
        </child-count> -->

        <!-- Avec vue2 -->
        <!-- <child-count :count.sync="count"></child-count> -->
        
        <!-- Avec vue3: v-model -->
        <child-count v-model:count="count"></child-count>
        <child-count-model v-model="count"></child-count-model>
    </div>
</template>

<script>
import ChildCount from './ChildCount.vue'
import ChildCountModel from './ChildCountModel.vue'

export default {
    data() {
        return {
            count: 0
        }
    },
    components: { 
        ChildCount,
        ChildCountModel 
    }
}   
</script>