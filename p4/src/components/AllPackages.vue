<template>
	<div>
		<div class="container packagesClass">
			<div class="alert alert-info text-left" role="alert">
				<h4 class="alert-heading" data-test="pageName">Vue All Packages</h4>
				<p>
					View all available packages below.  Use the Search bar to filter packages. Choose from a huge number (30) of packages!
				</p>
			</div>
			
			<input class="form-control" type="text" v-model="search" placeholder="Search Packages"/>
			<div v-for="pack in allPackages" :key="pack.id">
				<package-card :pack="pack"></package-card>
			</div>
		</div>
	</div>
</template>

<script>
	import PackageCard from './PackageCard.vue';

    export default {
        name: "AllPackages",
		components: {PackageCard},
        data: function(){
            return {
				filteredPackages: null,
				search: ''
            }
        },
		computed: {
            allPackages: function() {
                return this.$store.getters.getPackages(this.search);
            }
		}
    }
</script>

<style scoped>
	.form-control {
		margin: 30px 0;
	}
	
	.packagesClass {
		margin: 30px auto;
	}
</style>