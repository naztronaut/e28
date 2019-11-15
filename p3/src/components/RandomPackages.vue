<template>
	<div>
		<div class="card text-left">
			<div class="card-body">
				<h5 class="card-title">Package Name</h5>
				<h6 class="card-subtitle mb-2 text-muted">Package Category</h6>
				<p class="card-text">Package Description</p>
				<a href="#" class="card-link">View Package Details</a>
				<a href="#" class="card-link">Add Package to List</a>
			</div>
		</div>
		<div class="card">
			<div class="card-body">
				This is some text within a card body.
			</div>
		</div>
	</div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "RandomPackages",
		data: function(){
            return {
                packages: null
            }
		},
		methods: {
          randomPackages: function () {
			// nothing
          }
		},
        mounted() {
            axios
                .get(
                    'https://my-json-server.typicode.com/naztronaut/e28api/db'
                )
                .then(response => {
                    this.packages = response
                });
        }
    }
</script>

<style scoped>

</style>