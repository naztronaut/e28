<template>
	<div>
		<div v-if="myPackages.length > 0">
		<div v-for="pack in myPackages" :key="pack.id">
			<package-card :pack="pack"></package-card>
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
        mounted() {
            if(localStorage.getItem('myPackages')) {
                this.myPackages = [];
                let packageIds = JSON.parse(localStorage.getItem('myPackages'));
                packageIds.map( item => {
                    console.log(item);
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
    }
</script>

<style scoped>

</style>