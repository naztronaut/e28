<template>
	<div v-if="!deleted" class="card text-white bg-secondary mb-3"
	      :class="{'bg-secondary': winOrLose == 'LOSER!', 'bg-success': winOrLose == 'Winner!', 'bg-info': winOrLose == 'Tie!'}"
	      style="max-width: 18rem;">
		<div class="card-header">Game #{{ id }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ winOrLose }}</h5>
			<p class="card-text">You bet {{ bet }} and you achieved {{ numCorrect }}</p>
			<a href="#" class="btn btn-primary" @click.prevent="$emit('show-history', history)">History</a>
			<a href="#" class="btn btn-danger" @click.prevent="$emit('delete-game', id)">Delete</a>
		</div>
	</div>
</template>
<script>
    export default {
        data: function() {
            return {
                deleted: false
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
            },
		    'bet': {
	            type: Number,
			    default: 0
		    },
		    'numCorrect': {
	            type: Number,
			    default: 0
		    },
            'history': {
	            type: Array,
	            default: []
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
<style scoped>
	.card {
		box-shadow: 4px 4px #ccc;
	}
	div {
		text-shadow: 2px 2px 2px #444;
	}
	.btn {
		box-shadow: 2px 2px #444;
		margin: 5px 5px 2px;
	}
</style>