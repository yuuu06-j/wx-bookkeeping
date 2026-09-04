// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp()

Page({
  data: {
    records: [],
    monthExpense: '0.00',
    monthIncome: '0.00'
  },

  onShow() {
    this.loadRecords()
  },

  // 模拟从后端获取数据（目前读本地存储）
  loadRecords() {
    // 后期替换为：wx.request({ url: 'http://localhost:8080/api/records' })
    const records = wx.getStorageSync('records') || []
    // 按日期倒序
    records.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    // 计算本月收支
    const now = new Date()
    const yearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    
    let expense = 0, income = 0
    records.forEach(item => {
      if (item.date.startsWith(yearMonth)) {
        if (item.type === 'expense') expense += parseFloat(item.amount)
        else income += parseFloat(item.amount)
      }
    })

    this.setData({
      records,
      monthExpense: expense.toFixed(2),
      monthIncome: income.toFixed(2)
    })
  },

  goAdd() {
    wx.navigateTo({ url: '/pages/add/add' })
  },

  // 长按删除（模拟调用后端删除接口）
  deleteRecord(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '确定删除这条记录吗？',
      success: (res) => {
        if (res.confirm) {
          // 后期替换为：wx.request({ url: 'http://localhost:8080/api/records/' + id, method: 'DELETE' })
          let records = wx.getStorageSync('records') || []
          records = records.filter(item => item.id !== id)
          wx.setStorageSync('records', records)
          this.loadRecords()
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})