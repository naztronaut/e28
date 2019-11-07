<template>
	<div id='products'>
		<h2>Products</h2>
		<show-product
				v-for='product in products'
				:key='product.id'
				:product='product'
		></show-product>
	</div>
</template>

<script>
    import { products } from "../products";
    import ShowProduct from './ShowProduct.vue';
	export default {
		name: 'ShowProducts',
		components: {ShowProduct},
		data: function() {
			return {
				products: products
			}
		}
	}
</script>

<style scoped>
</style>