// pages/home/home.js
Page({
  data: {
    title:'hihihi'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  }
})