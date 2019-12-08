<template>
	<div class="container">
		<div>
			<div class="card text-left" v-if="packageDetail != null">
				<div class="card-header bg-transparent font-weight-bold"><h2>{{ packageDetail.name }}</h2></div>
				<div class="card-body">
					<!--<h5 class="card-title">{{ packageDetail.name }}</h5>-->
					<h6 class="card-subtitle mb-2 text-muted">{{ packageDetail.category }}</h6>
					<p class="card-text">{{ packageDetail.description }}</p>
					<p class="card-text">
						To install this package to your Vue application, run the following command:
						<code>npm i {{packageDetail.installer}}</code>
					</p>
					<p>
						For more information on {{ packageDetail.name }}, check out the NPM page:
						<a :href="'https://www.npmjs.com/package/' + packageDetail.installer" target="_blank">https://www.npmjs.com/package/{{packageDetail.installer}}</a>
						<small>&nbsp;(link opens in a new tab/window)</small>
					</p>
					<p>Weekly Downloads: {{ packageDetail.downloads }}</p>
					<p>License: {{ packageDetail.license }}</p>
					<div class="card-footer bg-transparent">
						<add-package-actions :package-id="packageDetail.id" @look-for-remove="$emit('look-for-remove', packageDetail.id)"></add-package-actions>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as config from '../config.js';
	import AddPackageActions from './AddPackageActions.vue';
    const axios = require('axios');
    export default {
        name: "PackageDetail",
		components: {AddPackageActions},
		props: ['id'],
		data: function () {
			return {
				packageDetail: null
			}
        },
        mounted() {
            axios
                .get(
                    config.api.url + '/' + this.id + '.json'
                )
                .then(response => {
                    this.packageDetail = response.data;
                });
        }
    }
</script>

<style scoped>
.container {
	margin-top: 30px;
}
</style>