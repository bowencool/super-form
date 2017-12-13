export default {
  showCheckBox: true, // 显示复选框
  showIndex: false, // 显示序号
  border: false, // 纵向边框
  stripe: false, // 斑马纹(隔行变色)
  // size: 'medium', // 表格尺寸, 可选值: 不填 / 'medium' / 'small' / 'mini'
  fit: false, // 列的宽度是否自撑开
  maxHeight: '650', // 最大高度, 内容过多出现滚动条(用来固定表头)
  pagination: { // 分页配置
    pageSize: 10, // 默认尺寸
    pageSizes: [10, 20, 50, 100], // 可选尺寸
    layout: 'total, sizes, prev, pager, next, jumper' //默认布局
  },
  columns: [ // 列
    {
      key: 'id', // 字段名, 必要
      label: '编号', // 显示的标签, 必要
      sortable: true, // 可排序
      // width: '120', // 对应列的宽度
      minWidth: '120', //对应列的最小宽度
      fixed: true, // 列是否固定在左侧或者右侧，true 表示固定在左侧, 可选: true, 'left', 'right'
      // resizable: true, // 对应列是否可以通过拖动改变宽度（需要在 table 上设置 border 属性为true）
      align: 'left', // 对齐方式 left/center/right
      // showOverflowTooltip: true // 当内容过长被隐藏时显示 tooltip(可以保证内容不换行)
    },
    {
      key: 'title',
      label: '标题',
      minWidth: '120',
      fixed: true,
      // showOverflowTooltip: true
    },
    {
      key: 'domain',
      label: '域名',
      minWidth: '120',
    },
    {
      key: 'ip',
      label: 'IP',
      minWidth: '140',
    },
    {
      key: 'email',
      label: '邮箱',
      minWidth: '220',
    },
    { key: 'name',
      label: '审核人',
      minWidth: '70',
    },
    { key: 'date',
      label: '日期',
      sortable: true,
      minWidth: '100',
    },
    {
      key: 'desc',
      label: '描述',
      minWidth: '200',
      showOverflowTooltip: true
    },
  ]
}
