<template>
	<div class="container">
		<div class="alert alert-info text-center" role="alert">
			<h4 class="alert-heading">Suggest a new package</h4>
			<p>
				Fill out the form below and submit a new package to be included in VPM!
			</p>
		</div>
		<form @submit.prevent='handleSubmit'>
			<div class="form-group row">
				<label for="packageName" class="col-sm-2 col-form-label text-right">Name:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageName" placeholder="Package Name" v-model="$v.newPackage.name.$model" data-test="formName">
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.required && $v.newPackage.name.$dirty' data-test="packageNameValidation">Package name is required.</div>
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.name.$dirty }' v-if='!$v.newPackage.name.minLength && $v.newPackage.name.$dirty' data-test="packageLenValidation">At least 2 characters is required.</div>
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
					<input type="text" class="form-control" id="packageInstaller" placeholder="e.g. my-package-install-command" v-model="$v.newPackage.installer.$model">
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.installer.$dirty }' v-if='!$v.newPackage.installer.required && $v.newPackage.installer.$dirty'>Package name is required.</div>
					<div class="text-left" :class='{ "form-feedback-error": $v.newPackage.installer.$dirty }' v-if='!$v.newPackage.installer.minLength && $v.newPackage.installer.$dirty'>At least 2 characters is required.</div>
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
			<div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
			<button type="submit" class="btn btn-primary mb-2">Suggest</button>
		</form>
		<div class="alert alert-info text-center" role="alert">
			<p>
				Here are a list of all suggested packages awaiting approval. If you find yours below, it hasn't been approved yet. It will be reviewed and
				entered into the Vue Package Manager if it's worthy. To speed up the process, send some money to Nazmus.
			</p>
		</div>
		<div>
			<div v-for="pack in suggestedPackageList" :key="pack.id">
				<package-card :pack="pack"></package-card>
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
				suggestedPackageList: null,
                formHasErrors: false
			}
        },
		methods: {
			handleSubmit: function () {
                if (!this.formHasErrors) {
                    axios.post(config.api.suggestedPackagesUrl, this.newPackage)
                        .then(() => {
                            this.getFbData();
                            this.newPackage = {
                                name: '',
                                description: '',
                                installer: '',
                                category: '',
                                license: ''
                            };
                        })
                }
            },
			getFbData: function() {
                axios.get(config.api.suggestedPackagesUrl)
                    .then(res => {
                        this.suggestedPackageList = (res.data);
                    });
			}
		},
        watch: {
            '$v.$anyError': function() {
                this.formHasErrors = this.$v.$anyError;
            }
        },
        validations: {
            newPackage: {
                name: {
                    required,
                    minLength: minLength(2)
                },
                installer: {
                    required,
                    minLength: minLength(2)
                }
            }
        },
		mounted() {
            this.getFbData();
		}
    }
</script>

<style scoped>
	.container {
		margin-top: 30px;
	}
	.form-feedback-error {
		font-size: 0.8rem;
		font-weight: bold;
		color: red;
		padding: 10px 0;
	}
</style>