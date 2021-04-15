<template>
    <div>
        <h3>
            ChildCount: {{childCount}}
        </h3>
        <button @click="incrementerChildCount">Incrementation</button>
    </div>
</template>

<script>
    export default {
        props: ['modelValue'],
        data() {
            return {
                childCount: this.modelValue
            }
        },
        methods: {
            incrementerChildCount() {
                this.childCount++;
                this.$emit("update:modelValue", this.childCount);

            }
        }
    }
</script>