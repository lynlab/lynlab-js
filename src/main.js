// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from './i18n';

import SquareButton from './components/ui/SquareButton';

import ErrorView from './components/ErrorView';
import LoadingView from './components/LoadingView';
import NavigationBar from './components/NavigationBar';

Vue.config.productionTip = false;
Vue.component('square-button', SquareButton);
Vue.component('navigation-bar', NavigationBar);
Vue.component('loading-view', LoadingView);
Vue.component('error-view', ErrorView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
