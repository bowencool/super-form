<style>
.block {
  display: block !important;
  display: flex !important;
}
</style>

<template>
  <el-form-item
    :rules="Rules"
    :label="item.label"
    :prop="item.key"
    :class="{'block':item.block}"
  >

    <el-input
      v-if="item.type==='input'"
      v-bind="$attrs"
      :type="item.subtype"
      :placeholder="item.placeholder"
      :disabled="item.disable"
      :readonly="item.readonly"
      :autosize="item.autosize"
      v-on="$listeners"
    ></el-input>

    <input-number
      v-else-if="item.type==='number'"
      v-bind="$attrs"
      :min="item.min"
      :max="item.max"
      :decimal1="item.decimal1"
      :append="item.append"
      :prepend="item.prepend"
      :disabled="item.disabled"
      v-on="$listeners"
    ></input-number>

    <el-checkbox
      v-else-if="item.type==='switch' && item.appearance==='checkbox'"
      v-bind="$attrs"
      :disabled="item.disabled"
      v-on="$listeners"
    ></el-checkbox>
    <el-switch
      v-else-if="item.type==='switch'"
      v-bind="$attrs"
      :disabled="item.disabled"
      v-on="$listeners"
    ></el-switch>

    <el-rate
      v-else-if="item.type==='rate'"
      v-bind="$attrs"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      text-color="#ff9900"
      v-on="$listeners"
    ></el-rate>

    <el-color-picker
      v-else-if="item.type==='color'"
      v-bind="$attrs"
      :show-alpha="item.showAlpha"
      :color-format="item.format"
      v-on="$listeners"
    ></el-color-picker>

    <el-slider
      v-else-if="item.type==='slider'"
      v-bind="$attrs"
      :range="item.isRange"
      :show-stops="item.showStops"
      :step="item.step"
      :min="item.min"
      :max="item.max"
      v-on="$listeners"
    ></el-slider>

    <el-radio-group
      v-else-if="item.type==='radio'"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <component
        v-for="o in item.options||ajaxOptions"
        :is="item.button?'el-radio-button':'el-radio'"
        :key="o.value"
        :label="o.value"
        :disabled="o.disabled"
        :border="item.border"
      >{{ o.label }}</component>
    </el-radio-group>

    <el-checkbox-group
      v-else-if="item.type==='checkbox'"
      :min="item.min"
      :max="item.max"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <component
        v-for="o in item.options||ajaxOptions"
        :is="item.button?'el-checkbox-button':'el-checkbox'"
        :key="o.value"
        :disabled="o.disabled"
        :label="o.value"
        :border="item.border"
      >{{ o.label }}</component>
    </el-checkbox-group>

    <el-select
      v-else-if="item.type==='select'"
      v-bind="$attrs"
      :multiple="item.multiple"
      :disabled="item.disabled"
      :multiple-limit="item.multipleLimit"
      v-on="$listeners"
    >
      <el-option
        v-for="o in item.options||ajaxOptions"
        :key="o.value"
        :label="o.label"
        :value="o.value"
        :disabled="o.disabled"
      >
      </el-option>
    </el-select>

    <el-cascader
      v-else-if="item.type==='cascader'"
      v-bind="$attrs"
      :options="item.options||require('element-china-area-data')[item.areaShortcut]||ajaxOptions"
      :filterable="item.filterable"
      :disabled="item.disabled"
      :clearable="true"
      v-on="$listeners"
    ></el-cascader>

    <el-time-picker
      v-else-if="item.type==='time'"
      :is-range="item.isRange"
      :value-format="item.valueFormat"
      :format="item.valueFormat"
      :placeholder="item.placeholder"
      v-bind="$attrs"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      v-on="$listeners"
    ></el-time-picker>

    <el-date-picker
      v-else-if="item.type==='date'"
      :type="item.subtype"
      :value-format="item.valueFormat"
      :format="item.viewFormat||item.valueFormat"
      :placeholder="item.placeholder"
      v-bind="$attrs"
      :disabled="item.disabled"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      v-on="$listeners"
    ></el-date-picker>

    <richtext
      v-else-if="item.type==='richtext'"
      v-bind="$attrs"
      v-on="$listeners"
    ></richtext>

    <span v-else>未知控件类型</span>

  </el-form-item>
</template>

<script>
import request from '@/utils/request';
import Richtext from '@/components/tinymce';

export default {
  components: {
    Richtext,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ajaxOptions: [],
    };
  },
  computed: {
    Rules() {
      const { item: { rules } } = this;
      if (rules === undefined) return undefined;

      const R = [];

      rules.forEach(rule => {
        if (rule.sql) {
          const validator = (rule2, value, callback) => {
            // eslint-disable-next-line
            request('/api/validate', 'POST', {
              key: rule2.field,
              value,
              sql: rule.sql.replace(/{key}/gi, rule2.field),
            })
              .then(res => {
                // eslint-disable-next-line
                callback(!res || undefined);
              })
              .catch(err => {
                this.$message.error(err.message);
                // eslint-disable-next-line
                callback(false);
              });
          };

          R.push({ validator, message: rule.message, trigger: 'blur' });
        } else {
          R.push(rule);
        }
      });

      return R;
    },
  },
  created() {
    const { optionsUrl, key, type } = this.item;
    if (optionsUrl) {
      const url = type === 'cascader' ? '/api/cascader/options' : '/api/some/options';
      console.log(
        `本页面为模拟预览，已自动重定向到URL:${url}，查看Network以获取格式`,
      );
      request(`${url}?key=${key}`, 'GET')
        .then(res => {
          // this.item.options = res
          // this.$set(this.item, 'options', res)
          this.ajaxOptions = res;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    }
  },
};
</script>
