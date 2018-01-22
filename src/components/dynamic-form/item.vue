<style>
.block {
  display: block !important;
  display: flex !important;
}
</style>

// todo
// 每行排两个&独占一行是否有必要
// 富文本支持
// 文件上传

<template>
  <el-form-item :rules="Rules" :label="item.label" :prop="item.key" :class="{'block':item.block}">

    <el-input v-if="item.type==='input'" v-bind="$attrs" v-on="$listeners" :type="item.subtype" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly" :autosize="item.autosize"></el-input>

    <input-number v-else-if="item.type==='number'" v-bind="$attrs" v-on="$listeners" :min="item.min" :max="item.max" :decimal1="item.decimal1" :append="item.append" :prepend="item.prepend"></input-number>

    <el-checkbox v-else-if="item.type==='switch' && item.appearance==='checkbox'" v-bind="$attrs" v-on="$listeners"></el-checkbox>
    <el-switch v-else-if="item.type==='switch'" v-bind="$attrs" v-on="$listeners"></el-switch>

    <el-rate v-else-if="item.type==='rate'" v-bind="$attrs" v-on="$listeners" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" text-color="#ff9900"></el-rate>

    <el-color-picker v-else-if="item.type==='color'" v-bind="$attrs" v-on="$listeners" :show-alpha="item.showAlpha" :color-format="item.format"></el-color-picker>

    <el-slider v-else-if="item.type==='slider'" v-bind="$attrs" v-on="$listeners" :range="item.isRange" :show-stops="item.showStops" :step="item.step" :min="item.min" :max="item.max"></el-slider>

    <el-radio-group v-else-if="item.type==='radio'" v-bind="$attrs" v-on="$listeners">
      <template v-if="item.button">
        <el-radio-button v-for="o in item.options" :key='o.value' :label="o.value" :disabled="o.disabled">{{o.label}}</el-radio-button>
      </template>
      <template v-else>
        <el-radio v-for="o in item.options" :key='o.value' :label="o.value" :disabled="o.disabled" :border="item.border">{{o.label}}</el-radio>
      </template>
    </el-radio-group>

    <el-checkbox-group v-else-if="item.type==='checkbox'" :min="item.min" :max="item.max" v-bind="$attrs" v-on="$listeners">
      <template v-if="item.button">
        <el-checkbox-button
          v-for="o in item.options"
          :key='o.value'
          :disabled="o.disabled"
          :label="o.value">{{o.label}}</el-checkbox-button>
      </template>
      <template v-else>
        <el-checkbox
          v-for="o in item.options"
          :key='o.value'
          :disabled="o.disabled"
          :label="o.value" :border="item.border">{{o.label}}</el-checkbox>
      </template>
    </el-checkbox-group>

    <el-select v-else-if="item.type==='select'" v-bind="$attrs" v-on="$listeners" :multiple="item.multiple" :multiple-limit="item.multipleLimit">
      <el-option v-for="o in item.options" :key="o.value" :label="o.label" :value="o.value" :disabled="o.disabled">
      </el-option>
    </el-select>

    <el-cascader v-else-if="item.type==='cascader'" v-bind="$attrs" v-on="$listeners" :options="item.options||regionOptions"></el-cascader>

    <el-time-picker v-else-if="item.type==='time'" :is-range="item.isRange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.valueFormat" :placeholder="item.placeholder" v-bind="$attrs" v-on="$listeners"></el-time-picker>

    <el-date-picker v-else-if="item.type==='date'" :type="item.subtype" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.viewFormat||item.valueFormat" :placeholder="item.placeholder" v-bind="$attrs" v-on="$listeners"></el-date-picker>

    <span v-else>未知控件类型</span>

  </el-form-item>
</template>

<script>
import { regionDataPlus } from 'element-china-area-data'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      regionOptions: regionDataPlus
    }
  },
  computed: {
    Rules() {
      const rules = this.item.rules
      if (rules === undefined) return undefined

      const R = []

      rules.forEach(rule => {
        if (rule.sql) {
          const validator = (rule2, value, callback) => {
            /* eslint-disable */
            setTimeout(callback, 1000)
            // this.$post('/validate', { key: rule2.field, value, sql: rule.sql.replace(/{key}/ig, rule2.field) })
            //   .then(res => {
            //     callback(!res || undefined)
            //   })
          }

          R.push({ validator, message: rule.message, trigger: 'blur' })
        } else {
          R.push(rule)
        }
      })

      return R
    }
  }
}
</script>
