<style>
  .block {
    display: block!important;
    display: flex!important;
  }
</style>

<template>
  <el-form-item :rules="item.rules" :label="item.label" :prop="item.key" v-bind="$attrs" v-on="$listeners" :class="{'block':item.block}">

    <!-- <el-input v-if="item.type==='text'" type="text" v-bind="$attrs" v-on="$listeners" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly"></el-input> -->

    <!-- <el-input v-else-if="item.type==='password'" type="password" v-bind="$attrs" v-on="$listeners" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly"></el-input> -->

    <!-- <el-input v-else-if="item.type==='textarea'" type="textarea" v-bind="$attrs" v-on="$listeners" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly" :autosize="{ minRows: 2, maxRows: 6}"></el-input> -->

    <el-input v-if="item.type==='input'" v-bind="$attrs" v-on="$listeners"
      :type="item.subtype"
      :placeholder="item.placeholder"
      :disabled="item.disable"
      :readonly="item.readonly"
      :autosize="item.autosize"></el-input>

    <input-number v-else-if="item.type==='number'" v-bind="$attrs" v-on="$listeners"
      :min="item.min"
      :max="item.max"
      :decimal="item.decimal"
      :append="item.append"
      :prepend="item.prepend"></input-number>

    <el-switch v-else-if="item.type==='switch'" v-bind="$attrs" v-on="$listeners"></el-switch>

    <el-rate v-else-if="item.type==='rate'" v-bind="$attrs" v-on="$listeners"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      text-color="#ff9900"></el-rate>

    <el-color-picker v-else-if="item.type==='color'" v-bind="$attrs" v-on="$listeners"
      :show-alpha="item.showAlpha" :color-format="item.format"
      ></el-color-picker>

    <el-slider v-else-if="item.type==='slider'" v-bind="$attrs" v-on="$listeners"
      :range="item.isRange"
      :show-stops="item.showStops"
      :step="item.step"
      :min="item.min"
      :max="item.max"
      ></el-slider>

    <el-radio-group v-else-if="item.type==='radio'" v-bind="$attrs" v-on="$listeners">
      <template v-if="item.button">
        <el-radio-button v-for="(o,j) in item.options" :key='j' :label="o.value" :disabled="o.disabled">{{o.label}}</el-radio-button>
      </template>
      <template v-else>
        <el-radio v-for="(o,j) in item.options" :key='j' :label="o.value" :disabled="o.disabled" :border="item.border">{{o.label}}</el-radio>
      </template>
    </el-radio-group>

    <el-checkbox-group v-else-if="item.type==='checkbox'" :min="item.min" :max="item.max" v-bind="$attrs" v-on="$listeners">
      <template v-if="item.button">
        <el-checkbox-button v-for="(o,j) in item.options" :key="j" :label="o.value" :disabled="o.disabled">{{o.label}}</el-checkbox-button>
      </template>
      <template v-else>
        <el-checkbox v-for="(o,j) in item.options" :key="j" :label="o.value" :disabled="o.disabled" :border="item.border">{{o.label}}</el-checkbox>
      </template>
    </el-checkbox-group>

    <el-select v-else-if="item.type==='select'" v-bind="$attrs" v-on="$listeners" :multiple="item.multiple" :multiple-limit="item.multipleLimit">
      <el-option v-for="(o,j) in item.options" :key="j" :label="o.label" :value="o.value" :disabled="o.disabled">
      </el-option>
    </el-select>

    <el-cascader v-else-if="item.type==='cascader'" v-bind="$attrs" v-on="$listeners" :options="item.options||regionOptions"></el-cascader>

    <el-time-picker v-else-if="item.type==='time'"
      :is-range="item.isRange"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :value-format="item.valueFormat"
      :format="item.valueFormat"
      :placeholder="item.placeholder"
      v-bind="$attrs" v-on="$listeners"></el-time-picker>

    <el-date-picker v-else-if="item.type==='date'" :type="item.subtype"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :value-format="item.valueFormat"
      :format="item.viewFormat||item.valueFormat"
      :placeholder="item.placeholder"
      v-bind="$attrs" v-on="$listeners"></el-date-picker>

    <span v-else>未知控件类型</span>

  </el-form-item>
</template>

<script>
import { regionDataPlus } from 'element-china-area-data'
import InputNumber from './input-number'
export default {
  components: { InputNumber },
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
  }
}
</script>
