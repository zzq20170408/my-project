import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    { path: '/', redirect: '/goods' },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
