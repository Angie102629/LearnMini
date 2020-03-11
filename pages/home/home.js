// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({
  // -----------2.初始化数据-------
  data:{
    message:'哈哈',
    list:[]
  },
  // -----------1.监听页面的生命周期函数-------
  // 页面被加载出来
  onLoad() {
    console.log('onLoad')
    const _this = this
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   // success:(res) => {
    //   //   console.log(res)
    //   //   const data = res.data.data.list;
    //   //   this.setData({
    //   //     list:data
    //   //   })
    //   // }
    //   success:function(res) {
    //     console.log(res)
    //     const data = res.data.data.list;
    //     _this.setData({
    //       list:data
    //     })
    //   }
    // })
  },
  
  //  -----------3.监听wxml中相关的一些事件-------
  handleGetUserInfo(event) {
    console.log(event)
  },
  bandleViewClic() {
    console.log('哈哈被点击了')
  },

  //  -----------4.监听wxml中相关的一些事件-------
  // 监听页面的滚动
  onPagescroll(obj) {
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面滚动到顶部')
  },
  onPullDownRefresh(){
    console.log("下拉刷新的事件")
  }
  
  // data:{
  //   name:'Coderwhy',
  //   age: 18,
  //   students:[
  //     {id: 110, name: 'kode', age:30},
  //     {id: 111, name: 'james', age: 30 },
  //     {id: 112, name: 'curry', age: 30 },
  //     {id: 113, name: 'why', age: 30 }
  //   ],
  //   counter:0
  // },

  // handleBtnClick() {
  //   this.setData({
  //     // 直接绑定100
  //     // counter:100
  //     // 递增
  //     counter: this.data.counter +1      
  //   })      
  // },

  // handleSubtraction() {
  //   this.setData({
  //     counter: this.data.counter - 1
  //   })
  // }
 
  
})