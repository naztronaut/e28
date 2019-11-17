<template>
	<div>Welcome to the home component. See some random Vue Packages below!
		<div class="container">
			<div class="row">
				<random-package class="col"></random-package>
				<random-package class="col"></random-package>
				<random-package class="col"></random-package>
			</div>
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