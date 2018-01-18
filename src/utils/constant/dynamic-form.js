/* eslint-disable */
// todo
// const options = [
//   {
//     "value": 1,
//     "label": '蒸羊羔'
//   }, {
//     "value": 2,
//     "label": '蒸熊掌'
//   }, {
//     "value": 3,
//     "label": '蒸鹿尾儿'
//   }, {
//     "value": 4,
//     "label": '烧花鸭',
//     "disabled": true
//   }
// ]
const options = {
  aaa: '蒸羊羔',
  bbb: '蒸熊掌',
  ccc: '蒸鹿尾儿',
}
export default {
  // "title": '', // 暂时没用到
  "inline": true, // 是否使用inline排版
  "labelPosition": 'right', // 标签对齐方式
  "labelWidth": '90px', // 标签宽度
  // "size": 'small', // 尺寸
  "statusIcon": true, // 显示验证图标
  "formItemList": [
    {
      "type": 'input', // 必要, String
      "subtype": 'text',
      "label": '昵称', // 必要, String
      "key": 'nickname1', // 必要, String
      // "disable": true, //禁用, Boolean
      // "readonly": true, //只读, Boolean
      // "block": true, //独占一行, Boolean, 如果选项太长也会自动换行
      "value": '', // 默认值
      "placeholder": '请输入一个昵称',
      "rules": [
        // 验证规则, Array
        // https://github.com/yiminghe/async-validator
        { "required": true, "message": '不能为空', 'trigger': 'blur' },
        { "min": 1, "max": 8, "message": '长度在 1 到 8 个字符', 'trigger': 'blur' },
        { "pattern": '^[\\w\\u4e00-\\u9fa5-_]+$', "message": '正则验证:^[\\w\\u4e00-\\u9fa5-_]+$', 'trigger': 'blur' },
        { "sql": "SELECT {key} FROM balabala", "message": 'SQL验证(异步): 昵称被占用了...', 'trigger': 'blur' }
      ],
    },
    {
      "type": 'input',
      "subtype": 'password',
      "label": '密码',
      "key": 'password1',
      "value": '',
      "placeholder": '请输入密码',
      "rules": [
        { "required": true, "message": '不能为空', 'trigger': 'blur' },
        { "min": 1, "max": 8, "message": '长度在 1 到 8 个字符', 'trigger': 'blur' },
        { "pattern": '^[\\w\\u4e00-\\u9fa5-_]+$', "message": '正则验证:^[\\w\\u4e00-\\u9fa5-_]+$', 'trigger': 'blur' },
      ],
    },
    {
      "type": 'input',
      "subtype": 'textarea',
      "label": '文本域',
      "key": 'textarea1',
      "value": '',
      "block": true,
      "placeholder": '描述(可换行, 可不填, 可自适应高度)',
      "autosize": true, // 自适应内容高度，只对 subtype="textarea" 有效, boolean / object
      // "autosize": { "minRows": 2, "maxRows": 5 },
    },
    {
      "type": 'switch',
      "label": '开关',
      "key": 'switch1',
      // "value": false
    },
    {
      "type": 'rate',
      "label": '评分',
      "key": 'rate1',
      "value": 5,
    },
    {
      "type": 'color',
      "label": '颜色',
      "key": 'color1',
      // 选择透明度
      "showAlpha": true,
      // 颜色格式, String, hsl / hsv / hex / rgb, 默认值为 hex(showAlpha=false) / rgb(showAlpha=true)
      // "format": 'rgb',
      // "value": 'rgba(19, 206, 102, 0.8)',
    },
    {
      "type": 'slider', // 可以限制范围, 也可以选择数字范围
      "label": '滑块',
      "key": 'slider1',
      "value": 10,
      // "block": true,
    },
    {
      "type": 'slider',
      "label": '自定义范围',
      "key": 'slider2',
      "value": 70,
      "block": true,
      "showStops": true, // 显示间断点
      "step": 5, // 默认为1
      "min": 60,
      "max": 90,
    },
    {
      "type": 'slider',
      "isRange": true, // 选择范围
      "label": '选择范围',
      "key": 'slider3',
      // "value": null, // 默认值为[min, max]
      "block": true,
      "min": 0,
      "max": 100,
    },
    {
      "type": 'number', // number 类型目前采用的是"输入前"限制, 使用rules验证会出现bug
      "label": '小数位数',
      "key": 'money1',
      "value": 16,
      "decimal1": 2, // 允许的小数位数
      "min": 0,
      "max": 99998,
      "prepend": '￥', // String, 前缀
      // "append": '元', // String, 后缀（单位）
    },
    {
      "type": 'number',
      "label": '显示单位',
      "key": 'count1',
      "value": 68,
      "decimal1": 0,
      "min": 0,
      "max": 99999,
      "append": '个',
    },
    {
      "type": 'radio',
      "label": '单选',
      "key": 'select1',
      "value": '',
      options,
      // "button": true, // 按钮形状, inline模式下推荐开启, 多选框checkbox同样有效
      // "border": true, // (非按钮形式)显示边框, inline模式下推荐开启, 多选框checkbox同样有效
      "rules": [{
        required: true, message: '请选择一项'
      }]
    },
    {
      "type": 'radio',
      "label": '按钮形状',
      "key": 'select1',
      "value": '',
      options,
      "button": true,
      // "border": true,
      "rules": [{
        required: true, message: '请选择一项'
      }]
    },
    {
      "type": 'select',
      "label": '下拉单选',
      "key": 'select1',
      "value": '',
      options,
      "placeholder": '请选择',
      "rules": [{
        required: true, message: '请选择一项'
      }]
    },
    {
      "type": 'checkbox',
      "label": '多选',
      "key": 'multiSelect1',
      "value": [],
      // "button": true,
      // "border": true,
      // "max": 2, // 限制输入
      // "min": 1,
      options,
      "rules": [{ "type": "array", "required": true, "min": 1, "max": 2, "message": '请勾选1~2项' }] // 输入后验证
    },
    {
      "type": 'checkbox',
      "label": '显示边框',
      "key": 'multiSelect1',
      "value": [],
      "border": true,
      options,
      "rules": [{ "type": "array", "required": true, "min": 1, "max": 2, "message": '请勾选1~2项' }]
    },
    {
      "type": 'select',
      "label": '下拉多选',
      "key": 'multiSelect1',
      "multiple": true,
      // "multipleLimit": 2, // 多选时用户最多可以选择的项目数，为 0 则不限制
      "value": [],
      options,
      "placeholder": '请选择',
      "rules": [{ "type": "array", "required": true, "min": 1, "max": 2, "message": '请勾选1~2项' }]
    },
    {
      "type": 'cascader',
      "label": '级联选择',
      "key": 'cascader1',
      // "value": null, // 返回格式: [ "340000", "340100", "340104" ]
      // 如果没有配置options, 则默认处理为“地区三级联动”(暂不考虑级别)
      // https://github.com/Plortinus/element-china-area-data
      /*"options": [
        {
          "value": '340000',
          "label": '安徽省',
          "children": [
            {
              "value": '340100',
              "label": '合肥市',
              "children": [
                {
                  "value": '340104',
                  "label": '蜀山区'
                }
              ]
            }
          ]
        }
      ],*/
      "placeholder": '请选择',
      "rules": [{ "required": true, "type": 'array', "min": 1, "message": '请选择' }]
    },
    {
      "type": 'date',
      "subtype": 'year',
      "label": '年',
      "key": 'year1',
      // "value": null, // 时间和日期默认值只能是具体时间、null、undefined(不填), 不能用空字符串
      "valueFormat": 'yyyy', // 默认为Date对象, 形如"2017-12-12T05:39:34.000Z"
      "viewFormat": 'yyyy年', // 显示在输入框中的格式, 如不填写, 则使用valueFormat, 仅 type=date 有效
      "rules": [{ "required": true, "message": '请选择年份', "trigger": 'blur' }],
      "placeholder": '选择年'
    },
    {
      "type": 'date',
      "subtype": 'month',
      "label": '月',
      "key": 'month1',
      "valueFormat": 'yyyy-MM',
      "viewFormat": 'yyyy年MM月',
      "rules": [{ "required": true, "message": '请选择' }],
      "placeholder": '选择月'
    },
    // {
    //   "type": 'date',
    //   "subtype": 'week',
    //   "label": '周',
    //   "key": 'week1',
    //   // "valueFormat": 'yyyy,WW', // 选择周时,valueFormat会使viewFormat失效https://github.com/ElemeFE/element/issues/8783
    //   "viewFormat": 'yyyy年 第WW周',
    //   "rules": [{ "required": true, "message": '请选择' }],
    //   "placeholder": '选择周'
    // },
    {
      "type": 'date',
      "subtype": 'date',
      "label": '日期',
      "key": 'date2',
      "valueFormat": 'yyyy-MM-dd',
      "placeholder": '选择日期',
      "rules": [{ "required": true, "message": '请选择一个日期' }]
    },
    {
      "type": 'time',
      "label": '时间',
      "key": 'time1',
      "valueFormat": 'HH:mm:ss A',
      "placeholder": '选择时间',
      "rules": [{ "required": true, "message": '请选择一个时间' }]
    },
    {
      "type": 'date',
      "subtype": 'datetime',
      "label": '日期时间',
      "key": 'datetime1',
      "valueFormat": 'yyyy-MM-dd HH:mm:ss',
      "placeholder": '选择日期和时间',
      "rules": [{ "required": true, "message": '请选择' }]
    },
    {
      "type": 'time',
      "isRange": true, // 选择时间范围
      "label": '时间范围',
      "key": 'timeRange1',
      "valueFormat": 'HH:mm:ss',
      "viewFormat": 'HH:mm:ss',
      // "value": null, // 返回格式: ['00:00', '00:00']
      "rules": [{ "type": "array", "required": true, "message": '请选择一个时间范围' }]
    },
    {
      "type": 'date',
      "subtype": 'daterange',
      "label": '日期范围',
      "key": 'daterange1',
      "valueFormat": 'yyyy-MM-dd',
      "rules": [{ "required": true, "message": '请选择' }]
    },
    {
      "type": 'date',
      "subtype": 'datetimerange',
      "label": '日期时间',
      "key": 'datetimerange1',
      "valueFormat": 'yyyy-MM-dd HH:mm:ss',
      "rules": [{ "required": true, "message": '请选择' }]
    },
  ]
}
