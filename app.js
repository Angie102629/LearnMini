const TOKEN = 'token'
App({
globalData:{
  token:''
},
onLaunch:function () {
  // 1.先从缓冲中取出token
  const token = wx.getStorageSync(TOKEN)
  // 2.判断是否取出token
  if (token && token.length) {
    this.check_token(token)//验证token是否过期
  } else {
    console.log('进行了登录')
    this.login()//没有token，进行登录操作
  }
},
check_token(token) {
 console.log(token)
 wx.request({
   url:'http://123.207.32.32:3000/auth',
   method: 'post',
   header:{
     toden
   },
   success:(res) => {
     if (!res.data.errCode) {
       console.log('token有效')
       this.globalData.token = token;
     } else {
       this.login()
     }
   },
   fail: function(err) {
     console.log(err)
   }
 })
},
login(){
  console.log('执行了登录操作')

// 获取code
 wx.login({
   success: (res) => {
    //  1.获取code
     const code = res.code;

  //  向自己的服务器发送请求
   wx.request({
     url:'http://123.207.32.32:3000/login',
     method: 'post',
     data: {
       code
     },
     success:(res) => {
       console.log(res)
      // //  1.取出token
      const token = res.data.token;

      // // 2.存储到全局变量中
       this.globalData.token = token;

      // // 3.存储到storage中
       wx.setStorageSync(TOKEN, token)   
      
        }
      })
    }
  })
}
})
