<template>
  <!-- <input :value="value" @input="updateValue" @focus="selectAll" @blur="formatValue" class="el-input__inner"> -->
  <el-input
    :value="value"
    :disabled="disabled"
    @input="handleInput"
    @focus="selectAll"
    @blur="formatValue"
  >
    <template
      v-if="prepend"
      slot="prepend"
    >{{ prepend }}</template>
    <template
      v-if="append"
      slot="append"
    >{{ append }}</template>
  </el-input>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    append: {
      type: String,
    },
    prepend: {
      type: String,
    },
    decimal1: Number,
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(this.formatValue);
  },
  methods: {
    handleInput(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.updateValue(value);
      }, 500);
    },
    updateValue(valueStr) {
      const result = this.parse(valueStr, this.value);
      let v = result.value;
      if (v < this.min) v = this.min;
      if (v > this.max) v = this.max;
      // console.assert(!result.warning, result.warning)
      this.$emit('input', v);
      setTimeout(this.formatValue, 20);
      // console.log('undated', v)
    },
    formatValue() {
      this.$el.querySelector('input').value = this.format(this.value);
    },
    // focus
    selectAll(event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(() => {
        event.target.select();
      }, 0);
    },
    format(number) {
      if (this.decimal1 === undefined || this.decimal1 === null) return number;
      return (Math.trunc(number * 1000000000000) / 1000000000000).toFixed(
        this.decimal1,
      );
    },
    parse(newString, oldNumber) {
      /* eslint-disable func-names */
      const CleanParse = function (value) {
        return { value };
      };
      const CurrencyWarning = function (warning, value) {
        return {
          warning,
          value,
          attempt: newString,
        };
      };
      const NotAValidDollarAmountWarning = function (value) {
        return new CurrencyWarning(`${newString}不合法的数字`, value);
      };
      const AutomaticConversionWarning = function (value) {
        return new CurrencyWarning(`${newString}已自动转换为${value}`, value);
      };

      const newNumber = Number(newString);
      const indexOfDot = newString.indexOf('.');
      const indexOfE = newString.indexOf('e');

      if (Number.isNaN(newNumber)) {
        if (
          indexOfDot === -1
          && indexOfE > 0
          && indexOfE === newString.length - 1
          && Number(newString.slice(0, indexOfE)) !== 0
        ) {
          return new CleanParse(oldNumber);
        }
        return new NotAValidDollarAmountWarning(oldNumber);
      }

      const newCurrencyString = this.format(newNumber);
      const newCurrencyNumber = Number(newCurrencyString);

      if (newCurrencyNumber === newNumber) {
        if (indexOfE !== -1 && indexOfE === newString.length - 2) {
          return new AutomaticConversionWarning(newNumber);
        }
        return new CleanParse(newNumber);
      }
      return new NotAValidDollarAmountWarning(
        newNumber > newCurrencyNumber ? newCurrencyNumber : oldNumber,
      );
    },
  },
};
</script>
