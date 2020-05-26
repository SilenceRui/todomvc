<template>
	<li class="todo">
		<div class="view">
			<input
				type="checkbox"
				class="toggle"
				@click="toggleTodo(todo)"
				:checked="todo.done"
			/>
			<label>{{ todo.text }}</label>
			<button class="destroy" @click="delTodo(todo)"></button>
		</div>
		<input type="text" class="edit" style="display: none;" />
	</li>
</template>
<script>
import { mapMutations } from "vuex";
export default {
	props: {
		todo: {
			type: Object,
		},
	},
	methods: {
		...mapMutations(["delTodo", "toggleTodo"]),
	},
};
</script>
