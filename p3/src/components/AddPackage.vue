<template>
	<div class="container">
		<form>
			<div class="form-group row">
				<label for="packageName" class="col-sm-2 col-form-label">Package Name</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageName" aria-describedby="packageHelp" placeholder="Package Name">
					<small id="packageHelp" class="form-text text-muted">Enter a package name</small>
				</div>
			</div>
			<div class="form-group row">
				<label for="packageCategory" class="col-sm-2 col-form-label">Package Category</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageCategory" aria-describedby="packageCategoryHelp" placeholder="Package Category">
					<small id="packageCategoryHelp" class="form-text text-muted">Enter a package category</small>
				</div>
			</div>
			<div class="form-group row">
				<label for="packageInstaller" class="col-sm-2 col-form-label">Package Install Command</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageInstaller" aria-describedby="packageInstallHelp" placeholder="Package Install Command">
					<small id="packageInstallHelp" class="form-text text-muted">How will users install your package?</small>
				</div>
			</div>
			<div class="form-group row">
				<label for="packageDescription" class="col-sm-2 col-form-label">Package Description</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="packageDescription" aria-describedby="packageDescriptionHelp" placeholder="Package Description">
					<small id="packageDescriptionHelp" class="form-text text-muted">What does your package do?</small>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
    export default {
        name: "AddPackage"
    }
</script>

<style scoped>
	.container {
		margin-top: 50px;
	}
	small {
		text-align: left;
	}
	.col-form-label {
		text-align: right;
	}
</style>