// pages/add/add.js
Page({
  data: {
    form: {
      type: 'expense',
      amount: '',
      category: '',
      remark: '',
      date: ''
    },
    categoryIndex: 0,
    categories: {
      expense: ['餐饮', '交通', '购物', '娱乐', '居住', '医疗', '其他'],
      income: ['工资', '奖金', '投资', '兼职', '红包', '其他']
    }
  },

  onLoad() {
    const today = new Date()
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    this.setData({ 'form.date': dateStr })
  },

  switchType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      'form.type': type,
      'form.category': ''
    })
  },

  onAmountInput(e) {
    this.setData({ 'form.amount': e.detail.value })
  },

  onCategoryChange(e) {
    const type = this.data.form.type
    const category = this.data.categories[type][e.detail.value]
    this.setData({
      'form.category': category,
      categoryIndex: e.detail.value
    })
  },

  onDateChange(e) {
    this.setData({ 'form.date': e.detail.value })
  },

  onRemarkInput(e) {
    this.setData({ 'form.remark': e.detail.value })
  },

  submit() {
    const { type, amount, category, date } = this.data.form
    if (!amount || parseFloat(amount) <= 0) {
      wx.showToast({ title: '请输入金额', icon: 'none' })
      return
    }
    if (!category) {
      wx.showToast({ title: '请选择分类', icon: 'none' })
      return
    }

    const record = {
      id: Date.now().toString(),
      type,
      amount: parseFloat(amount).toFixed(2),
      category,
      remark: this.data.form.remark,
      date
    }

    // 模拟调用后端新增接口
    // 后期替换为：wx.request({ url: 'http://localhost:8080/api/records', method: 'POST', data: record })
    const records = wx.getStorageSync('records') || []
    records.push(record)
    wx.setStorageSync('records', records)

    wx.showToast({ title: '保存成功', icon: 'success' })
    setTimeout(() => {
      wx.navigateBack()
    }, 800)
  }
})