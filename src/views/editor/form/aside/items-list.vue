<template>
  <div>
    <!-- 文本 -->
    <el-popover ref="popinput" v-model="popInput">
      <div>选择一个类型：</div>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('input', {subtype:'text'}),popInput = false"
          >普通文本</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('input', {subtype:'password'}),popInput = false"
          >密码</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('input', {subtype:'textarea'}),popInput = false"
          >文本域</el-button>
      </el-button-group>
    </el-popover>
    <el-tag class="item" v-popover:popinput>
      <icon-svg icon="input" />
      <span>文本</span>
    </el-tag>
    <!-- 数字 -->
    <el-tag class="item" @click.native="addItem('number')">
      <icon-svg icon="number" />
      <span>数字</span>
    </el-tag>
    <!-- 开关 -->
    <el-tag class="item" @click.native="addItem('switch')">
      <icon-svg icon="switch" />
      <span>开关</span>
    </el-tag>
    <!-- 单选 -->
    <el-tag class="item" @click.native="addItem('radio')">
      <icon-svg icon="radio" />
      <span>单选</span>
    </el-tag>
    <!-- 多选 -->
    <el-tag class="item" @click.native="addItem('checkbox')">
      <icon-svg icon="checkbox" />
      <span>多选</span>
    </el-tag>
    <!-- 下拉 -->
    <el-popover ref="popselect" v-model="popSelect">
      <div>选择模式：</div>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('select', {multiple:false}),popSelect = false"
          >单选</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('select', {multiple:true}),popSelect = false"
          >多选</el-button>
      </el-button-group>
    </el-popover>
    <el-tag class="item" v-popover:popselect>
      <icon-svg icon="select" />
      <span>下拉</span>
    </el-tag>
  </div>
</template>

<script>
  import guid from '@/utils/guid'
  import DYNAMIC_FORM from '@/utils/constant/dynamic-form'
  export default {
    data() {
      return {
        popInput: false,
        popSelect: false,
      }
    },
    methods: {
      addItem(type, option) {
        const key = guid()
        const newItem = {...DYNAMIC_FORM[type], key, ...option}
        // console.log(newItem)
        this.$emit('add', newItem)
      }
    }
  }
</script>
