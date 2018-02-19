module.exports = {
  // 'DELETE /api/user/:id': (req, res) => {
  //   console.log('---->', req.body)
  //   console.log('---->', req.params.id)
  //   res.send({ status: 'ok', message: '删除成功！' });
  // },
  'GET /api/cascader/options': [
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
    },
    {
      "value": "0",
      "label": "禁用的选项",
      "disabled": true,
    }
  ],
  'POST /api/validate': (req, res) => {
    res.json(/1$/.test(req.body.value))
  },
}
