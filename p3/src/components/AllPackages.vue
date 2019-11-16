<template>
	<div>
		<div class="card text-left" v-for='pack in allPackages' :key="pack.id">
			<div class="card-body">
				<h5 class="card-title">{{ pack.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ pack.category }}</h6>
				<p class="card-text">{{ pack.description }}</p>
				<add-package></add-package>
			</div>
		</div>
	</div>
</template>

<script>
	import AddPackage from './AddPackageActions.vue';
    const axios = require('axios');
    export default {
        name: "AllPackages",
		components: {AddPackage},
        data: function(){
            return {
                allPackages: null
            }
        },
        mounted() {
            this.packages = axios
                .get(
                    'https://my-json-server.typicode.com/naztronaut/e28api/packages'
                )
                .then(response => {
                    this.allPackages = response.data;
                });
        }
    }
</script>

<style scoped>

</style>