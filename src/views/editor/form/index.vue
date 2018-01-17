<template lang="pug">
  el-container
    el-aside(style="background-color: rgb(238, 241, 246)")
      el-button(v-for="(item,i) in LIST" :key="item.label" @click="addFormItem(item)") {{item.label}}
    el-main
      //- fake-form(:dynamicForm="currentForm")
</template>

<script>
// import FakeForm from './main/fake-form'
const LIST = [
  {
    type: 'input',
    label: '输入框'
  },
  {
    type: 'radio',
    label: '单选框'
  }
]

export default {
  // components: { FakeForm },
  data() {
    return {
      LIST,
      currentForm: {
        inline: true,
        labelPosition: 'right',
        labelWidth: '90px',
        size: 'small',
        formList: []
      }
    }
  },
  methods: {
    addFormItem(item) {
      this.currentForm.formList.push({
        ...item,
        // label: item.label + this.currentForm.formList.length
      })
    }
  }
}
</script>
