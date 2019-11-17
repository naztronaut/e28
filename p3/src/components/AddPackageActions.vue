<template>
	<div>
		<router-link class="card-link" exact :to='{name: "packageDetail", params: {id: packageId}}'>View Package Details</router-link>
		<a href="#" class="card-link" :package-id="packageId" @click.prevent="$emit('look-for-remove', packageId); addToMyPackages()" >{{ addToPackagesText }}</a>
	</div>
</template>

<script>
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

</style>