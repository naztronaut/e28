<template>
	<div class="card text-left">
		<div class="card-body">
			<h5 class="card-title" data-test="cardTitle">{{ pack.name }}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{ pack.category }}</h6>
			<p class="card-text">{{ pack.description }}</p>
			<add-package-actions :package-id="pack.id" @look-for-remove="$emit('look-for-remove', pack.id)"></add-package-actions>
		</div>
	</div>
</template>

<script>
    import AddPackageActions from './AddPackageActions.vue';
    export default {
        name: "PackageCard",
		components: {AddPackageActions},
		props: ['pack']
    }
</script>

<style scoped>

</style>