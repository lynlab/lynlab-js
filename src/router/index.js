import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/blog/Index';
import Post from '@/components/blog/Post';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/blog',
      name: 'BlogIndex',
      component: Index,
      meta: { title: 'LYnLab Blog' },
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: Post,
      meta: { title: 'LYnLab Blog' },
    },
    {
      path: '*',
      name: 'NotFound',
      component: { template: '<error-view message="페이지를 찾을 수 없음" />' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || 'LYnLab';
  next();
});

export default router;
