const Vue = require('vue');
const VueRouter = require('vue-router');
const Vuex = require('vuex');

const store = require('./store')

const App = require('./views/App.vue');
const Main = require('./views/Main.vue');
const TypesSubstances = require('./views/TypesSubstances.vue');
const Substances = require('./views/Substances.vue');
const ViewSubstance = require('./views/ViewSubstance.vue');
// const TrainerTypes = require('./views/TrainerTypes.vue');
// const Trainer = require('./views/Trainer.vue');
// const MarkedSubstances = require('./views/MarkedSubstances.vue');

Vue.use(VueRouter);
Vue.use(Vuex);

var router = new VueRouter({
	routes: [
		{path: '/', redirect: '/main'},
		{path: '/main', component: Main},
		{path: '/types', component: TypesSubstances},
		{path: '/type/:type', component:	Substances},
    {path: '/substance', component: ViewSubstance, props: (route) => ({ query: route.query.q })},
    // {path: '/trainer_types', component: TrainerTypes},
    // {path: '/trainer', component: Trainer},
    // {path: '/marked', component: MarkedSubstances}
	]
});

new Vue({
  el: '#app',
	render: (h) => h(App),
	router,
	store
});
