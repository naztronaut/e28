<template>
	<div  v-if="!deleted" class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
		<div class="card-header">Game #{{ id }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ winOrLose }}</h5>
			<!--<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
			<a href="#" class="btn btn-primary" @click="$emit('delete-game', id)">Delete Game</a>
		</div>
	</div>
</template>
<script>
    export default {
        data: function() {
            return {
                deleted: false,
	            history: []
            }
        },
	    props: {
	        'id': {
	          type: Number,
	          default: 0
	        },
            'winOrLose': {
                type: String,
	            default: ''
            }
	    },
	    methods: {
            deleteHistory: function () {
	            this.deleted = true;
            }
	    },
	    template: '#historical-answers'
    }
</script>
<style></style>