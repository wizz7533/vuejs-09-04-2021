<template>
    <div>
        <h1>Liste de produit</h1>
        <ul>
            <li 
                v-for="product of products" 
                :key="product.title">
                    {{product.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import shop from '@/api/shop';

    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            shop.getProducts(products => {
                this.products = products
            });
        }
    }
</script>

<style scoped>

</style>