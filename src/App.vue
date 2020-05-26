<template>
	<div id="app">
		<section class="todoapp">
			<Add-todo></Add-todo>
			<section class="main" style="">
				<input
					type="checkbox"
					class="toggle-all"
					@click="toggleAllTodo(!isAllDone)"
					:checked="isAllDone"
				/>
				<ul class="todo-list">
					<List-todo
						v-for="(item, index) in filterTodo"
						:todo="item"
						:key="index"
						:class="{ completed: item.done }"
					></List-todo>
				</ul>
			</section>
			<footer class="footer" style="">
				<span class="todo-count"
					><strong>{{ unDoneNumber }}</strong> items left</span
				>
				<ul class="filters">
					<li><a href="" :class="{selected:visibility=='all'}" @click.prevent="changeVisibility('all')">all</a></li>
					<li><a href="" :class="{selected:visibility=='active'}"  @click.prevent="changeVisibility('active')">active</a></li>
					<li><a href="" :class="{selected:visibility=='completed'}"  @click.prevent="changeVisibility('completed')">completed</a></li>
				</ul>
				<button class="clear-completed" @click="delDone()" v-show="doneNumber>0">
					clear completed
				</button>
			</footer>
		</section>
	</div>
</template>

<script>
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/AddTodo";
require("./assets/todo-mvc.css");

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
	name: "App",
	components: {
		ListTodo,
		AddTodo,
	},
	methods: {
		...mapMutations(["toggleAllTodo","delDone","changeVisibility"]),
	},
	computed: {
		...mapGetters(["isAllDone", "unDoneNumber","filterTodo","doneNumber"]),
		...mapState(["todos","visibility"]),
	},
};
</script>

<style></style>
