<template>
	<div class="container">
		<div>
			<div class="card text-left" v-if="packageDetail != null">
				<div class="card-body">
					<h5 class="card-title">{{ packageDetail.name }}</h5>
					<h6 class="card-subtitle mb-2 text-muted">{{ packageDetail.category }}</h6>
					<p class="card-text">{{ packageDetail.description }}</p>
					<p class="card-text">
						To install this package to your Vue application, run the following command:
						<code>npm i {{packageDetail.installer}}</code>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "PackageDetail",
		props: ['id'],
		data: function () {
			return {
				packageDetail: null
			}
        },
        mounted() {
            axios
                .get(
                    'https://my-json-server.typicode.com/naztronaut/e28api/packages/' + this.id
                )
                .then(response => {
                    this.packageDetail = response.data;
                });
        }
    }
</script>

<style scoped>

</style>