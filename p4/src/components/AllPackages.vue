<template>
	<div>
		<div class="container packagesClass">
			<div class="alert alert-info text-left" role="alert">
				<h4 class="alert-heading">Vue All Packages</h4>
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
    // import * as config from '../config.js';
    // const axios = require('axios');
    export default {
        name: "AllPackages",
		components: {PackageCard},
        data: function(){
            return {
				filteredPackages: null,
				search: ''
            }
        },
		methods: {
            // filterPackages: function () {
				// this.listPackages = this.filteredPackages.filter( item => {
				// 	let searchItem = this.search.toLowerCase();
				// 	return  (item.name.toLowerCase().indexOf(searchItem) > -1) ||
				// 		(item.category.toLowerCase().indexOf(searchItem) > -1) ||
				// 		(item.description.toLowerCase().indexOf(searchItem) > -1);
				// });
            // }
		},
		computed: {
            allPackages: function() {
                return this.$store.getters.getPackages(this.search);
            }
		},
        mounted() {
            // this.allPackages = this.listPackages();
            // this.packages = axios
            //     .get(
            //         config.api.url + '.json'
            //     )
            //     .then(response => {
            //         this.allPackages = response.data.splice(1);
            //         this.filteredPackages = response.data.splice(1);
            //     });
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