<template>
	<div>
		<div class="card text-left" v-if="randPackage != null">
			<div class="card-body">
				<h5 class="card-title">{{ randPackage.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ randPackage.category }}</h6>
				<p class="card-text">{{ randPackage.description }} {{ randPackage.id }} 1</p>
				<add-package-actions :package-id="randPackage.id"></add-package-actions>
			</div>
		</div>
	</div>
</template>

<script>
    import AddPackageActions from './AddPackageActions.vue';
    const axios = require('axios');
    export default {
        name: "RandomPackage",
		components: {AddPackageActions},
		data: function(){
            return {
				randPackage: null
            }
		},
        mounted() {
            this.packages = axios
                .get(
                    'https://my-json-server.typicode.com/naztronaut/e28api/packages'
                )
                .then(response => {
					this.randPackage = response.data[Math.floor(Math.random() * response.data.length)];
                });
        }
    }
</script>

<style scoped>

</style>