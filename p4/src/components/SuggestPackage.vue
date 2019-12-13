<template>
	<div class="container">
		<form @submit.prevent='handleSubmit'>
			<div class="form-group row">
				<label for="packageName" class="col-sm-2 col-form-label text-right">Name:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageName" placeholder="Package Name" v-model="$v.newPackage.name.$model">
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.required && $v.newPackage.name.$dirty'>Package name is required.</div>
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.minLength && $v.newPackage.name.$dirty'>At least 2 characters is required.</div>
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
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.required && $v.newPackage.name.$dirty'>Package name is required.</div>
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.minLength && $v.newPackage.name.$dirty'>At least 2 characters is required.</div>
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
		<div>
			<div v-for="pack in JSON.parse(suggestedPackageList)" :key="pack.id">
				<package-card :pack="1"></package-card>
			</div>
		</div>
	</div>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators';
    const axios = require('axios');
    import PackageCard from './PackageCard.vue';
    import * as config from '../config.js';
    let newPackage = {
        name: '',
		description: '',
		installer: '',
		category: '',
		license: ''
    };
    export default {
        name: "SuggestPackage",
		components: {PackageCard},
		data: function () {
			return {
				newPackage: newPackage,
				suggestedPackageList: null
			}
        },
		methods: {
			handleSubmit: function () {
				axios.post(config.api.suggestedPackagesUrl, this.newPackage)
					.then( res => {
                        console.log(res);
						// this.suggestedPackageList.push(newPackage);
						console.log(this.suggestedPackageList);
						let temp = JSON.parse(this.suggestedPackageList);
						let temp2 = {...temp, ...newPackage};
						console.log(temp2);
					})
            }
		},
        validations: {
            newPackage: {
                name: {
                    required,
                    minLength: minLength(2)
                },
                installer: {
                    required
                }
            }
        },
		mounted() {
            axios.get(config.api.suggestedPackagesUrl)
				.then(res => {
					console.log(res);
					console.log(JSON.parse(res.request.response));
					this.suggestedPackageList = (res.request.response);
					console.log(this.suggestedPackageList);
				});
		}
    }
</script>

<style scoped>
	.form-feedback-error {
		font-size: 0.8rem;
		font-weight: bold;
		color: red;
		padding: 10px 0;
	}
</style>