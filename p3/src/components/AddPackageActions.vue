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
                    } else {
                        // Remove package
                        this.addToPackagesText = 'Add Package';
						myLocalPackages = myLocalPackages.filter( item => {
							return item != this.packageId;
						});
                    }
                } else {
                    myLocalPackages.push(this.packageId);
                }
                localStorage.setItem('myPackages', JSON.stringify(myLocalPackages));
                
                config.selectedPackages.packageCount = JSON.parse(localStorage.getItem('myPackages')).length;
                console.log(JSON.parse(localStorage.getItem('myPackages')).length);
                console.log(config.selectedPackages);
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
	.btn {
		margin: 3px 10px 0 0;
	}
</style>