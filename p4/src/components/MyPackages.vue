<template>
	<div>
		<div class="container">
			<div v-if="myPackages.length">
				<div class="row">
					<div class="col">
					<div class="alert alert-info text-center" role="alert">
						<h4 class="alert-heading">Vue My Packages</h4>
						<p>
							View all packages that you've added.
						</p>
					</div>
					</div>
				</div>
				<div class="row">
					<div class="col-7">
						<div v-if="myPackages.length > 0">
							<div v-for="pack in myPackages" :key="pack.id">
								<package-card :pack="pack" @look-for-remove="lookForRemove"></package-card>
							</div>
						</div>
					</div>
					<div class="col-4">
						<div class="alert alert-warning" role="alert">
							<h4 class="alert-heading">Quick Install Reference</h4>
							<p></p>
							<div class="lead text-left" v-if="myPackages.length > 0">
								<div v-for="pack in myPackages" :key="pack.id">
									<code>npm i {{ pack.installer }}</code><br />
								</div>
							</div>
							<hr>
							<p class="mb-0">Copy/paste the commands above to install your packages!</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row" v-else>
				<div class="col">
					<div class="alert alert-danger" role="alert">
						<h4 class="alert-heading">No Packages Found</h4>
						<p>Doesn't look like you've added any packages to your list. Go back to 'All Packages' and add a few!</p>
						<hr>
						<p class="mb-0">Then come back to this page to see a list of your packages and get a quick install block of code.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PackageCard from './PackageCard.vue';
    let VanillaToasts = require('vanillatoasts');
    export default {
        name: "MyPackages",
		components: {PackageCard},
		data: function(){
            return {
				myPackagesLocalStorage: []
            }
		},
		methods: {
            lookForRemove: function ($event) {
                this.myPackagesLocalStorage = JSON.parse(localStorage.getItem('myPackages'));
                
                this.myPackagesLocalStorage = this.myPackagesLocalStorage.filter(item => {
                    return item != $event;
                });
                localStorage.setItem('myPackages', JSON.stringify(this.myPackagesLocalStorage));
                this.$store.commit('setPackageCount', JSON.parse(localStorage.getItem('myPackages')).length);
                this.toastMsg('Package Removed Successfully', 'error');
            },
			toastMsg: function (title, type) {
				VanillaToasts.create({
				title: title,
				type: type,
				timeout: 3000
				});
			}
		},
		computed: {
            myPackages: function () {
				return this.$store.getters.getMyPackages(this.myPackagesLocalStorage);
            }
		},
        mounted() {
			if(localStorage.getItem('myPackages')) {
                this.myPackagesLocalStorage = JSON.parse(localStorage.getItem('myPackages'));
            }
        }
    }
</script>

<style scoped>
.container {
	margin-top: 30px;
}
</style>