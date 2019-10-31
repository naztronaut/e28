<template>
	<div v-if="!deleted" class="card text-white bg-secondary mb-3"
	      :class="{'bg-secondary': winOrLose == 'LOSER!', 'bg-success': winOrLose == 'Winner!', 'bg-info': winOrLose == 'Tie!'}"
	      style="max-width: 18rem;">
		<div class="card-header">Game #{{ id }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ winOrLose }}</h5>
			<p class="card-text">You bet <strong>{{ bet }}</strong> and you scored <strong>{{ numCorrect }}</strong>.</p>
			<div class="row">
				<div class="col">
					<button class="btn btn-primary" @click.prevent="$emit('show-history', history)" :disabled="activeGame">History</button>
				</div>
				<div class="col">
					<button class="btn btn-danger" @click.prevent="$emit('delete-game', id)">Delete</button>
				</div>
			</div>
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
            },
		    'activeGame': {
	            type: Boolean,
			    default: false
		    }
	    },
	    methods: {
            deleteHistory: function () {
	            this.deleted = true;
            }
	    }
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
	button {
		min-width: 0!important;
	}
</style>