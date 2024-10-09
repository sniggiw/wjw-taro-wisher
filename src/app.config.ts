export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/shop/index",
    "pages/store/index",
    "pages/mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#333",
    selectedColor: "#2c3e50",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      {
        text: "卡牌",
        pagePath: "pages/index/index",
        iconPath: "static/tabs/home.png",
        selectedIconPath: "static/tabs/home_active.png",
      },
      {
        text: "商城",
        pagePath: "pages/shop/index",
        iconPath: "static/tabs/shop.png",
        selectedIconPath: "static/tabs/shop_active.png",
      },
      {
        text: "仓库",
        pagePath: "pages/store/index",
        iconPath: "static/tabs/store.png",
        selectedIconPath: "static/tabs/store_active.png",
      },
      {
        text: "我的",
        pagePath: "pages/mine/index",
        iconPath: "static/tabs/mine.png",
        selectedIconPath: "static/tabs/mine_active.png",
      },
    ],
  },
});
