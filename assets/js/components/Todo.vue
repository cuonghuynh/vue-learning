<style type="text/css">
	
</style>


<template>
	<div class="container-fluid">
		<h1 class="text-center">To-do App</h1>
		
		<div class="col-md-6">
			<label>Title</label>
			<input type="text" name="" value="" placeholder="" class="form-control" v-model="newTaskTitle">
			<label>Description</label>
			<textarea name="" class="form-control" v-model="newTaskDescription"></textarea>
			<br>
			<br>
			<button type="submit" class="btn btn-lg btn-success" v-on:click="addTask(task)">Add</button>
			
			<pre v-show="tasks.length">
				{{ tasks | json }}
			</pre>
			<div class="alert" v-else>
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				<strong>No task!</strong> No task here.
			</div>
		</div>
		<div class="col-md-6">
			<ul class="list-group" >
				<li class="list-group-item" v-for="task in tasks | orderBy 'title'">
					<h4>{{ task.title }}</h4>
					<i>{{ task.description }}</i>
					<span class="task-close bg-danger" @click="removeTask(task)">x</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	module.exports = {

		name: 'Todo',

		data () {
			return {
				newTaskTitle: '',
				newTaskDescription: '',
				tasks: []
			}
		},

		methods: {
			addTask () {
				this.tasks.push({title: this.newTaskTitle, description: this.newTaskDescription});
			},
			removeTask (task) {
				this.tasks.$remove(task);
			}
		}

	}
</script>