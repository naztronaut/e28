<template>
	<div class="container">
		<form @submit.prevent='handleSubmit'>
			<div class="form-group row">
				<label for="packageName" class="col-sm-2 col-form-label text-right">Name:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageName" placeholder="Package Name" v-model="newPackage.name">
				</div>
			</div>
			<div class="form-group row">
				<label for="packageCategory" class="col-sm-2 col-form-label text-right">Category:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageCategory" placeholder="e.g. Styling, AJAX" v-model="newPackage.category">
				</div>
			</div>
			<div class="form-group row">
				<label for="packageInstaller" class="col-sm-2 col-form-label text-right">Installer:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageInstaller" placeholder="e.g. my-package-install-command" v-model="newPackage.installer">
				</div>
			</div>
			<div class="form-group row">
				<label for="packageDescription" class="col-sm-2 col-form-label text-right">Description:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageDescription" placeholder="Package Description" v-model="newPackage.description">
				</div>
			</div>
			<div class="form-group row">
				<label for="packageLicense" class="col-sm-2 col-form-label text-right">License:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageLicense" placeholder="e.g. MIT, Apache" v-model="newPackage.license">
				</div>
			</div>
			<button type="submit" class="btn btn-primary mb-2">Suggest</button>
		</form>
	</div>
</template>

<script>
    const axios = require('axios');
    import * as config from '../config.js';
    let newPackage = {
        name: '',
		description: '',
		installer: '',
		category: '',
		license: ''
    }
    export default {
        name: "SuggestPackage",
		data: function () {
			return {
				newPackage: newPackage
			}
        },
		methods: {
			handleSubmit: function () {
				axios.post(config.api.suggestedPackagesUrl, this.newPackage)
					.then( res => {
						console.log(res);
					})
            }
		}
    }
</script>

<style scoped>

</style>