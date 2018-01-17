import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/views/preview/preview'
import Editor from '@/views/editor'
import FormEditor from '@/views/editor/form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/editor',
      redirect: '/editor/form',
      component: Editor,
      children: [
        {
          path: 'form',
          component: FormEditor
        },
      ],
    },
    {
      path: '/preview',
      component: Preview,
    }
    // {
    //   path: '*',
    //   redirect: '/editor/form'
    // },
  ]
})
