<template>
  <div class="c666">
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
    <!-- 日期 -->
    <!-- http://element-cn.eleme.io/#/zh-CN/component/date-picker -->
    <el-popover ref="popdate" v-model="popDate">
      <div>选择模式：</div>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'year',label:'年份',valueFormat:'yyyy'}),popDate = false"
          >年份</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'month',label:'月份',valueFormat:'yyyy-MM'}),popDate = false"
          >月份</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'date',label:'日期',valueFormat:'yyyy-MM-dd'}),popDate = false"
          >日期</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'datetime',label:'日期时间',valueFormat:'yyyy-MM-dd HH:mm:ss'}),popDate = false"
          >日期时间</el-button>
      </el-button-group>
      <div>范围：</div>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'daterange',label:'日期范围',valueFormat:'yyyy-MM-dd'}),popDate = false"
          >日期范围</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('date', {subtype:'datetimerange',label:'日期时间范围',valueFormat:'yyyy-MM-dd hh:mm:ss a'}),popDate = false"
          >日期时间范围</el-button>
      </el-button-group>
    </el-popover>
    <el-tag class="item" v-popover:popdate>
      <i class="el-icon-date"></i>
      <span>日期</span>
    </el-tag>
    <!-- 级联 -->
    <!-- https://github.com/Plortinus/element-china-area-data -->
    <el-popover ref="popcascader" v-model="popCascader">
      <div>常用：</div>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('cascader', {areaShortcut:'provinceAndCityData'}),popCascader = false"
          >省/市</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('cascader', {areaShortcut:'regionData'}),popCascader = false"
          >省/市/区</el-button>
      </el-button-group>
      <el-button-group>
        <el-button size="mini" type="primary" plain
          @click="addItem('cascader', {areaShortcut:'provinceAndCityDataPlus'}),popCascader = false"
          >省/市(带"全部")</el-button>
        <el-button size="mini" type="primary" plain
          @click="addItem('cascader', {areaShortcut:'regionDataPlus'}),popCascader = false"
          >省/市/区(带"全部")</el-button>
      </el-button-group>
      <el-button size="mini" type="primary" plain
        @click="$message('暂不支持')"
        >自定义</el-button>
    </el-popover>
    <el-tag class="item" v-popover:popcascader>
      <icon-svg icon="cascader" />
      <span>级联</span>
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
        popDate: false,
        popSelect: false,
        popCascader: false,
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
