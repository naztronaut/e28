<template>
	<div>
		<div class="card text-left" v-if="randPackage != null">
			<package-card :pack="randPackage"></package-card>
		</div>
	</div>
</template>

<script>
    import * as config from '../config.js';
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
                    config.api.url + '.json'
                )
                .then(response => {
					this.randPackage = response.data[(Math.floor(Math.random() * response.data.length)) + 1];
                });
        }
    }
</script>

<style scoped>

</style>