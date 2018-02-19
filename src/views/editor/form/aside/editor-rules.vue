<template lang="pug">
  div
    p.c666.text-center 验证规则[type={{itemType}}]
    //- pre {{itemRules}}
    //- 必填
    div(v-if="types.includes('required')")
      el-checkbox(:value="valid1.enable" @input="handleValid1") 必填
    //- 长度
    template(v-if="types.includes('length')")
      div
        el-checkbox(:value="valid2.enable" @input="handleValid2({enable:$event})") 验证长度
      div(v-show="valid2.enable")
        //- label.c666 长度
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
    //- 正则
    template(v-if="types.includes('regexp')")
      div
        el-checkbox(:value="valid3.enable" @input="handleValid3({enable:$event})") 正则验证(暂不支持flag)
      div(v-show="valid3.enable")
        //- todo 添加多条正则
        el-input(size="mini" :value="valid3.pattern" @input="handleValid3({pattern:$event})")
    //- sql
    template(v-if="types.includes('sql')")
      div
        el-checkbox(:value="valid4.enable" @input="handleValid4({enable:$event})") SQL验证
      div(v-show="valid4.enable")
        el-input(size="mini" :value="valid4.sql" @input="handleValid4({sql:$event})")
</template>

<script>
// todo message编辑，添加正则flag，允许添加多条regexp
export default {
  methods: {
    handleValid1(newV) {
      const ruleIndex = this.itemRules.findIndex(r => r.required !== undefined)
      if (newV) {
        // 如果勾选了必填
        // 如果不存在这项规则, 就在头部添加
        ruleIndex === -1 && this.itemRules.unshift({ required: true, message: '必填项', trigger: 'blur' })
      } else {
        //如果取消了勾选
        //如果已存在, 删除
        ruleIndex > -1 && this.itemRules.splice(ruleIndex, 1)
      }
      // this.valid1 = newV
    },
    // todo 大量重复
    handleValid2({ enable = this.valid2.enable, min = this.valid2.min, max = this.valid2.max }) {
      const ruleIndex = this.itemRules.findIndex(r => r.min !== undefined)
      if (enable) {
        // 勾选或者修改数值
        const isString = this.itemType === 'input'
        const newRule = {
          min,
          max,
          type: isString ? 'string' : 'array',
          message: isString ? `长度在${min}~${max}个字符` : `勾选${min}~${max}个`,
          trigger: 'blur',
        }

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
    },
    handleValid3({ enable = this.valid3.enable, pattern = this.valid3.pattern }) {
      const ruleIndex = this.itemRules.findIndex(r => r.pattern !== undefined)
      if (enable) {
        // 勾选或者修改数值
        const newRule = { pattern, message: `输入不合法: ${pattern}`, trigger: 'blur' }

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
    },
    handleValid4({ enable = this.valid4.enable, sql = this.valid4.sql }) {
      const ruleIndex = this.itemRules.findIndex(r => r.sql !== undefined)
      if (enable) {
        // 勾选或者修改数值
        const newRule = { sql, message: 'sql验证失败', trigger: 'blur' }

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
    },
  },
  computed: {
    // 必填
    valid1() {
      return {
        enable: this.itemRules.findIndex(r => r.required !== undefined) > -1,
        type: 'todo',
      }
    },
    // 长度
    valid2() {
      const idx = this.itemRules.findIndex(r => r.min !== undefined)
      return idx > -1 ? {
        enable: true,
        min: this.itemRules[idx].min,
        max: this.itemRules[idx].max,
      } : {
        enable: false,
        min: 1,
        max: 2,
      }
    },
    // 正则
    valid3() {
      const idx = this.itemRules.findIndex(r => r.pattern !== undefined)
      return idx > -1 ? {
        enable: true,
        pattern: this.itemRules[idx].pattern,
      } : {
        enable: false,
        pattern: '^\\w+$',
      }
    },
    // SQL
    valid4() {
      const idx = this.itemRules.findIndex(r => r.sql !== undefined)
      return idx > -1 ? {
        enable: true,
        sql: this.itemRules[idx].sql,
      } : {
        enable: false,
        sql: 'SELECT {key} FORM BALABALA',
      }
    },
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
    },
    types: {
      required: true,
    }
  }
}
</script>
