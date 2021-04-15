<template>
    <div>
        <h1>Liste de produit</h1>
        <img v-if="isLoading" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="">
        <ul v-else>
            <li 
                v-for="product of products" 
                :key="product.title">
                    {{product.title}}
            </li>
        </ul>
        <form action="">
            <fieldset>
                <legend>Filtres</legend>
                <label for="available">Produits disponibles </label>
                <input id="available" type="checkbox" v-model="checked">
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                checked: false
                // products: []
            }
        },
        computed: {
            products(){ 
                if (this.checked) {
                    return this.$store.getters.availableProducts
                } else {
                    return this.$store.state.products
                }
            },
        },
        // On attend que le composant soit crée
        created() {
            // Pour appeler une action du store, on utilise la methode dispatch()
            this.$store.dispatch('fetchProducts').then(
                () => this.isLoading = false
            );

            this.$store.dispatch('userModule/printHello');
            
            // shop.getProducts(products => {
            //     // this.products = products
            //     // Commit est une methode du store, qui prend en paramettre le nom de la fonction mutation
            //     this.$store.commit('setProducts', products);
            // });
        }
    }
</script>

<style scoped>

</style>