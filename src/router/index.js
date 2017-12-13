import Vue from 'vue'
import Router from 'vue-router'
import FormEditor from '@/views/FormEditor'

Vue.use(Router)

export default new Router({
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
