<template lang="pug">
  div
    p.c666.text-center 验证规则[type={{itemType}}]

    el-checkbox(:value="valid1" @input="handleValid1") 必填

    el-checkbox(:value="valid2.enable" @input="handleValid2({enable:$event})") 验证长度
    div(v-show="valid2.enable")
      el-input-number(controls-position="right" size="mini"
        :value="valid2.min"
        @input="handleValid2({min:$event})"
        :min="1"
        :max="valid2.max")
      span.c666 ~
      el-input-number(controls-position="right" size="mini"
        :value="valid2.max"
        @input="handleValid2({max:$event})"
        :min="valid2.min"
        :max="9999")

    //- pre {{itemRules}}
</template>

<script>
export default {
  methods: {
    handleValid1(newV) {
      const ruleIndex = this.itemRules.findIndex(r => r.required !== undefined)
      if (newV) {
        // 如果勾选了必填
        // 如果不存在这项规则, 就在头部添加
        ruleIndex === -1 && this.itemRules.unshift({ required: true, message: '不能为空', trigger: 'blur' })
      } else {
        //如果取消了勾选
        //如果已存在, 删除
        ruleIndex > -1 && this.itemRules.splice(ruleIndex, 1)
      }
      this.valid1 = newV
    },
    handleValid2({ enable = this.valid2.enable, min = this.valid2.min, max = this.valid2.max }) {
      const ruleIndex = this.itemRules.findIndex(r => r.min !== undefined)
      if (enable) {
        // 勾选或者修改数值
        const newRule = { min, max, message: `长度在${min}~${max}个字符`, trigger: 'blur' }

        if (ruleIndex === -1) {
          // 勾选操作
          this.itemRules.push(newRule)
        } else {
          // 修改操作
          this.itemRules[ruleIndex] = newRule
          this.$emit('update:item-rules', [...this.itemRules])
        }
      } else {
        // 只能是取消勾选
        ruleIndex > -1 && this.itemRules.splice(ruleIndex, 1)
      }
      this.valid2 = { enable, min, max }
    },
  },
  data() {
    // 从已有数据中读取初始值

    // 必填
    const v1idx = this.itemRules.findIndex(r => r.required !== undefined)

    // 长度
    const v2idx = this.itemRules.findIndex(r => r.min !== undefined)
    const v2 = v2idx > -1 ? {
      enable: true,
      min: this.itemRules[v2idx].min,
      max: this.itemRules[v2idx].max
    } : { enable: false, min: 1, max: 5 }

    // 正则
    const v3idx = this.itemRules.findIndex(r => r.pattern !== undefined)
    const v3 = v3idx > -1 ? {
      enable: true,
      min: this.itemRules[v3idx].min,
      max: this.itemRules[v3idx].max
    } : { enable: false, min: 1, max: 5 }

    return {
      // 是否必填
      valid1: v1idx > -1,
      // 验证长度
      valid2: v2,
      // 正则
      valid3: v3,
    }
  },
  props: {
    itemRules: {
      type: Array,
      default() {
        return []
      }
    },
    itemType: {
      type: String,
      required: true,
    }
  }
}
</script>
