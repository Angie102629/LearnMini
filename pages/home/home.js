// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  
  handleIncrement(event) {
    console.log(event)
    this.setData({
      counter: this.data.counter +1
    })    
  },

  handleTabClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel)
    // 2.通过方法对数据进行修改
    my_sel.incrementCounter(10)


  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})