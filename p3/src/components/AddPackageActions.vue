<template>
	<div>
		<a href="#" class="card-link" >View Package Details</a>
		<router-link class="card-link" exact :to='{name: "packageDetail", params: {id: packageId}}'>Blah</router-link>
		<a href="#" class="card-link" :package-id="packageId">Add Package to List</a>
	</div>
</template>

<script>
    export default {
        name: "AddPackageActions",
		props: ['packageId'],
		data: function () {
			return {}
        }
    }
</script>

<style scoped>

</style>