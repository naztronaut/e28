<template>
	<div>
		<div class="container">
			<div class="alert alert-info text-left" role="alert">
				<h4 class="alert-heading">Vue Package Manager</h4>
				<p>
					Welcome to the the Vue Package Manager. It's like NPM but worse because it only hosts 30 random packages that can be used with Vue. <br />
					What can you do here?
				</p>
				<ol>
					<li>View details for each package</li>
					<li>Add a package to your list which will appear in the 'My Packages' page where you can get a list of quick install commands</li>
					<li>Remove packages from your list from any package</li>
					<li>Filter packages in the 'All Packages' page by keyword</li>
				</ol>
				<hr>
				<p class="mb-0">See some random Vue Packages below!</p>
			</div>
		</div>
		<div class="container">
			<div class="row packagesClass">
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
	.container {
		margin-top: 30px;
	}
	.packagesClass {
		margin-bottom: 30px;
	}
</style>