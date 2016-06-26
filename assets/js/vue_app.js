var Vue = require('vue');
var VueResoucre = require('vue-resource');

var Todo = require('./components/Todo.vue');

new Vue({

	el: "body",

	components: {
		Todo
	},

	ready() {
		console.log("Vue app is ready.");
	}

})