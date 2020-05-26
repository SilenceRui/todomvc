import Vue from "vue";
import Vuex from "vuex";
import localStorage from './localStorage'

Vue.use(Vuex);


export default new Vuex.Store({
	state: localStorage.get(),
	getters: {
		isAllDone(state) {
			return state.todos.every((item) => item.done == true);
		},
		unDoneNumber(state) {
			let n = 0;
			state.todos.forEach((item) => {
				if (item.done == false) {
					n++;
				}
			});
			return n;
		},
		filterTodo(state) {
			if (state.visibility == "all") {
				return state.todos;
			} else if (state.visibility == "active") {
				return state.todos.filter((item) => item.done == false);
			} else if (state.visibility == "completed") {
				return state.todos.filter((item) => item.done == true);
			}
		},
		doneNumber(state) {
			let n = 0;
			state.todos.forEach((item) => {
				if (item.done == true) {
					n++;
				}
			});
			return n;
		},
	},
	mutations: {
		addTodo(state, txt) {
			state.todos.push({ text: txt, done: false });
			localStorage.save(state);
		},
		delTodo(state, todo) {
			let index = state.todos.findIndex((item) => item === todo);
			if (index != -1) {
				state.todos.splice(index, 1);
			}
			localStorage.save(state);
		},
		toggleTodo(state, todo) {
			todo.done = !todo.done;
			localStorage.save(state);
		},
		toggleAllTodo(state, flag) {
			state.todos.forEach((item) => {
				item.done = flag;
			});
			localStorage.save(state);
		},
		delDone(state) {
			state.todos = state.todos.filter((item) => item.done == false);
			localStorage.save(state);
		},
		changeVisibility(state, v) {
			state.visibility = v;
			localStorage.save(state);
		},
	},
	actions: {},
	modules: {},
});
