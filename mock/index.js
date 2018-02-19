module.exports = {
  // 'DELETE /api/user/:id': (req, res) => {
  //   console.log('---->', req.body)
  //   console.log('---->', req.params.id)
  //   res.send({ status: 'ok', message: '删除成功！' });
  // },
  'GET /api/cascader/options': [
    {
      "value": "1",
      "label": "查看控制台",
      "disabled": true,
    },
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
  ],
  'GET /api/some/options': [
    {
      "value": "01",
      "label": "查",
    },
    {
      "value": "02",
      "label": "看",
    },
    {
      "value": "03",
      "label": "控",
    },
    {
      "value": "04",
      "label": "制",
      "disabled": true
    },
    {
      "value": "05",
      "label": "台",
      "disabled": true
    },
  ],
  'POST /api/validate': (req, res) => {
    res.json(/1$/.test(req.body.value))
  },
}
