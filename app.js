App({
  onLaunch: function() {
    // 小程序启动时执行
    console.log('鲜食优选小程序启动');
    
    // 初始化云开发环境（如果需要）
    // wx.cloud.init({
    //   env: 'your-env-id',
    //   traceUser: true
    // });
    
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    
    // 检查是否是首次启动
    const isFirstLaunch = !wx.getStorageSync('hasLaunchedBefore');
    if (isFirstLaunch) {
      wx.setStorageSync('hasLaunchedBefore', true);
      // 首次启动的逻辑，如显示引导页等
    }
  },
  
  globalData: {
    userInfo: null,
    systemInfo: null,
    // 其他全局数据
  }
});