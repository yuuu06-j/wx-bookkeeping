// pages/stats/stats.js
Page({
  data: {
    balance: '0.00',
    monthIncome: '0.00',
    monthExpense: '0.00',
    expenseRank: []
  },

  onShow() {
    this.loadStats()
  },

  loadStats() {
    const records = wx.getStorageSync('records') || []
    const now = new Date()
    const yearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

    let income = 0, expense = 0
    const categoryMap = {}

    records.forEach(item => {
      if (item.date.startsWith(yearMonth)) {
        if (item.type === 'income') income += parseFloat(item.amount)
        else {
          expense += parseFloat(item.amount)
          categoryMap[item.category] = (categoryMap[item.category] || 0) + parseFloat(item.amount)
        }
      }
    })

    // 计算分类占比
    let rank = Object.keys(categoryMap).map(k => ({
      category: k,
      amount: categoryMap[k].toFixed(2)
    })).sort((a, b) => b.amount - a.amount).slice(0, 5)

    if (rank.length > 0) {
      const max = Math.max(...rank.map(i => parseFloat(i.amount)))
      rank = rank.map(i => ({
        ...i,
        percent: (parseFloat(i.amount) / max * 100).toFixed(0)
      }))
    }

    this.setData({
      monthIncome: income.toFixed(2),
      monthExpense: expense.toFixed(2),
      balance: (income - expense).toFixed(2),
      expenseRank: rank
    })
  }
})