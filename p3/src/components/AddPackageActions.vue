<template>
	<div>
		<router-link class="btn btn-info" exact :to='{name: "packageDetail", params: {id: packageId}}' v-if="this.$route.fullPath.indexOf('packageDetail') < 0">
			View Details
		</router-link>
		<button class="btn" :class="{'btn-danger': addToPackagesText == 'Remove Package', 'btn-success': addToPackagesText != 'Remove Package'}" :package-id="packageId" @click.prevent="$emit('look-for-remove', packageId); addToMyPackages()" >{{ addToPackagesText }}</button>
	</div>
</template>

<script>
	import * as config from './../config.js';
    let VanillaToasts = require('vanillatoasts');
    export default {
        name: "AddPackageActions",
		props: ['packageId'],
		data: function () {
			return {
				addToPackagesText: 'Add Package'
			}
        },
		methods: {
            addToMyPackages: function () {
                let myLocalPackages = [];
                if(localStorage.getItem('myPackages')){
                    myLocalPackages = JSON.parse(localStorage.getItem('myPackages'));
                    if(!myLocalPackages.includes(this.packageId)) {
                        myLocalPackages.push(this.packageId);
                        this.addToPackagesText = 'Remove Package';
                        this.toastMsg('Package Added Successfully', 'success');
                    } else {
                        // Remove package
                        this.addToPackagesText = 'Add Package';
						myLocalPackages = myLocalPackages.filter( item => {
							return item != this.packageId;
						});
                        this.toastMsg('Package Removed Successfully', 'error');
                    }
                } else {
                    this.addToPackagesText = 'Remove Package';
                    myLocalPackages.push(this.packageId);
                    this.toastMsg('Package Added Successfully', 'success');
                }
                localStorage.setItem('myPackages', JSON.stringify(myLocalPackages));
                
                config.selectedPackages.packageCount = JSON.parse(localStorage.getItem('myPackages')).length;
            },
			toastMsg: function (title, type) {
				VanillaToasts.create({
					title: title,
					type: type,
					timeout: 3000
				});
            }
		},
		mounted() {
            if(localStorage.getItem('myPackages')){
                let myLocalPackages = JSON.parse(localStorage.getItem('myPackages'));
                if(myLocalPackages.includes(this.packageId)){
                    this.addToPackagesText = 'Remove Package';
                }
            }
		}
    }
</script>

<style scoped>
	@import "../../node_modules/vanillatoasts/vanillatoasts.css";
	.btn {
		margin: 3px 10px 0 0;
	}
</style>