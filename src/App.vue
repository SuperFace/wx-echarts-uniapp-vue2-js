<style lang="scss">

</style>
<script>
export default {
  globalData: {
    isFirstLogin: true,
    userInfo: {},
    token: '',
    openId: '',
    session_key: '',
    isGoLogin: null,
    tokenIsTimeout: true,
    isScanIngNewScene: false,
    scene: '',
    statusBarObject: {},
  },
  onLaunch: function (e) {
    // uni.hideTabBar({
    // 		animation: false
    // 		});
    console.log('----App onLaunch-2---');
  },
  onShow: function () {
    console.log('----app-show-3--');
    uni.hideTabBar({
      animation: false,
    });
  },
  onHide() {
    console.log('-----hide-----');
  },
  mounted() {
    console.log('------app-mounted-1------');
    this.statusData();
  },
  beforeDestroy() {
    console.log('-------beforeDestroy--------');
    if (this.task) {
      // close websocket
      this.task.close({
        success() {
          console.log('------websocket close ok------');
        },
      });
    }
  },
  methods: {
    statusData() {
      const systemInfo = uni.getSystemInfoSync();
      console.log('systemInfo==', systemInfo);
      const saveTop = systemInfo.safeAreaInsets.top;
      const saveBottom = systemInfo.safeAreaInsets.bottom;
      const pagePaddingBottom = saveBottom > 0 ? saveBottom + 43 + 30 : 77 + 30;

      //状态栏高度
      const statusBarHeight = systemInfo.statusBarHeight;
      // 获取胶囊按钮的位置
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      // 胶囊距上距离
      const top = menuButtonInfo.top;
      // 胶囊高度
      const topBarHeight = menuButtonInfo.height;
      // 状态栏到胶囊的间距
      const topBarPadding = top - statusBarHeight;
      // 导航栏高度 = 状态栏到胶囊的间距（ 胶囊距上距离 - 状态栏高度 ）*2  +  胶囊高度
      const headerHeight = topBarPadding * 2 + topBarHeight;
      this.globalData.systemInfo = systemInfo;
      this.globalData.statusBarObject = {
        saveTop: saveTop,
        saveBottom: saveBottom,
        pagePaddingBottom: pagePaddingBottom,
        statusBarHeight: statusBarHeight, //状态栏高度
        top: top, // 胶囊距上距离
        topBarHeight: topBarHeight, // 胶囊高度
        topBarPadding: topBarPadding, // 状态栏到胶囊的间距
        headerHeight: headerHeight, // 导航栏高度
      };
    },
  },
};
</script>
