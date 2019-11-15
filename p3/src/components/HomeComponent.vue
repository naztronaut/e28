<template>
	<div>Welcome to the home component. See some random Vue Packages below!
		<div class="container">
			<random-packages></random-packages>
		</div>
	</div>
	
</template>

<script>
	import RandomPackages from './RandomPackages.vue';
	
    export default {
        name: "HomeComponent",
		components: {RandomPackages}
    }
</script>

<style scoped>

</style>