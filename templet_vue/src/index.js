import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './component/App.vue';

const str = '13';

new Vue({
	el: '#demo',
	render: h => h(App)
})
