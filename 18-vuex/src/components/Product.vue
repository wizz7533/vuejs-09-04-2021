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
                // products: []
            }
        },
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        // On attend que le composant soit créer
        created() {
            shop.getProducts(products => {
                // this.products = products
                // Commit est une methode du store, qui prend en paramettre le nom de la fonction mutation
                this.$store.commit('setProducts', products);
            });
        }
    }
</script>

<style scoped>

</style>