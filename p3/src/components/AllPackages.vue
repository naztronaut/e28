<template>
	<div>
		<input class="form-control" type="text" v-model="search" @keyup="filterPackages" placeholder="Search Packages"/>
		<div class="card text-left" v-for='pack in allPackages' :key="pack.id">
			<div class="card-body">
				<h5 class="card-title">{{ pack.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ pack.category }}</h6>
				<p class="card-text">{{ pack.description }}</p>
				<add-package-actions :package-id="pack.id"></add-package-actions>
			</div>
		</div>
	</div>
</template>

<script>
	import AddPackageActions from './AddPackageActions.vue';
    const axios = require('axios');
    export default {
        name: "AllPackages",
		components: {AddPackageActions},
        data: function(){
            return {
                allPackages: null,
				filteredPackages: null,
				search: null
            }
        },
		methods: {
            filterPackages: function () {
				this.allPackages = this.filteredPackages.filter( item => {
					let searchItem = this.search.toLowerCase();
					return  (item.name.toLowerCase().indexOf(searchItem) > -1) ||
						(item.category.toLowerCase().indexOf(searchItem) > -1) ||
						(item.description.toLowerCase().indexOf(searchItem) > -1);
				});
            }
		},
        mounted() {
            this.packages = axios
                .get(
                    'https://my-json-server.typicode.com/naztronaut/e28api/packages'
                )
                .then(response => {
                    this.allPackages = response.data;
                    this.filteredPackages = response.data;
                });
        }
    }
</script>

<style scoped>
	.form-control {
		margin: 30px 0;
	}
</style>