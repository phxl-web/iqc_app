export default {
  path: '/check/qualityCheckList',//科室审核列表
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('container/check/qualityCheck').default)
    })
  },
  childRoutes: [
    {
      path: '/check/deptCheckList/:id',//科室审核详情
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/check/qualityCheckDetail').default)
        })
      }
    }
  ]
}