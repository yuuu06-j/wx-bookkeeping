// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
App({
  onLaunch() {
    // 初始化本地存储
    const records = wx.getStorageSync('records') || []
    if (records.length === 0) {
      // 放几条演示数据
      wx.setStorageSync('records', [
        {
          id: '1',
          type: 'expense',
          category: '餐饮',
          amount: 28.50,
          remark: '午餐',
          date: '2026-09-03'
        },
        {
          id: '2',
          type: 'income',
          category: '工资',
          amount: 5000.00,
          remark: '9月工资',
          date: '2026-09-01'
        }
      ])
    }
  }
})
