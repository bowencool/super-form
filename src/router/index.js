import Vue from 'vue'
import Router from 'vue-router'
import FormEditor from '@/views/formEditor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/form-editor',
      name: 'FormEditor',
      component: FormEditor
    },
    // {
    //   path: '/form-editor',
    //   name: 'FormEditor',
    //   component: FormEditor
    // },
    {
      path: '*',
      redirect: '/form-editor'
    },
  ]
})
