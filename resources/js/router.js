import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './Pages/Home';
import Login from './Pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/home',
			component: Home,
		},
		{ 
			path: '/login', 
			component: Login,
		},
	],
	mode: 'history'
});

