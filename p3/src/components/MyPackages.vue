<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-7">
					<div v-if="myPackages.length > 0">
						<div v-for="pack in myPackages" :key="pack.id">
							<package-card :pack="pack" @look-for-remove="lookForRemove($event)"></package-card>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="jumbotron">
						<p class="lead text-left">Quick Install Reference <br /><small>Copy/paste the commands below to install your packages</small></p>
						<div class="lead text-left" v-if="myPackages.length > 0">
							<div v-for="pack in myPackages" :key="pack.id">
								<code>npm i {{ pack.installer }}</code><br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PackageCard from './PackageCard.vue';
    const axios = require('axios');
    export default {
        name: "MyPackages",
		components: {PackageCard},
		data: function(){
            return {
                myPackages: []
            }
		},
		methods: {
            lookForRemove: function (id) {
                this.myPackages = this.myPackages.filter( item => {
                   return item.id != id;
                });
            },
			loadData: function () {
                if(localStorage.getItem('myPackages')) {
                    this.myPackages = [];
                    let packageIds = JSON.parse(localStorage.getItem('myPackages'));
                    packageIds.map( item => {
                        axios
                            .get(
                                'https://my-json-server.typicode.com/naztronaut/e28api/packages/' + item
                            )
                            .then(response => {
                                this.myPackages.push(response.data);
                            });
                    });
                } else {
                    this.myPackages = [{
                        id: 999,
                        name: "You didn't add any packages, go back to the All Packages page and add some!",
                        category: "",
                        description: ""
                    }];
                }
            }
		},
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>

</style>