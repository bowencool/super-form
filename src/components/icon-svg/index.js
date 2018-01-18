import Vue from 'vue'
import IconSvg from './icon-svg.vue'// svg组件

Vue.component('icon-svg', IconSvg)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
