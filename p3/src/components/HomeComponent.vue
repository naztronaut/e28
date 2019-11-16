<template>
	<div>Welcome to the home component. See some random Vue Packages below!
		<div class="container">
			<random-package></random-package>
			<random-package></random-package>
			<random-package></random-package>
		</div>
	</div>
	
</template>

<script>
	import RandomPackage from './RandomPackage.vue';
	
    export default {
        name: "HomeComponent",
		components: {RandomPackage}
    }
</script>

<style scoped>

</style>