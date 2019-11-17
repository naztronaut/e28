<template>
	<div>
		<div class="card text-left" v-if="randPackage != null">
			<package-card :pack="randPackage"></package-card>
		</div>
	</div>
</template>

<script>
    // import AddPackageActions from './AddPackageActions.vue';
    import PackageCard from './PackageCard.vue';
    const axios = require('axios');
    export default {
        name: "RandomPackage",
		components: {PackageCard},
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