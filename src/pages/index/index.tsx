import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

const CARD_TYPE = [
  "全部",
  "篮球卡",
  "足球卡",
  "宝可梦",
  "迪士尼",
  "潮玩卡",
  "女神卡",
  "海贼王",
  "游戏王",
];

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index px-1">
      <Swiper
        className="index-swiper rounded-lg overflow-hidden"
        indicatorColor="#999"
        indicatorActiveColor="#2c3e50"
        interval={2000}
        circular
        indicatorDots
        autoplay
      >
        {[...Array(5)].map((_, i) => {
          return (
            <SwiperItem key={i}>
              <View className="flex items-center justify-center h-full bg-green-400">
                {`swiper${i + 1}`}
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>

      <View className="bg-gray-600 h-20 w-full my-3 rounded-lg flex items-center justify-center">
        banner
      </View>

      <View className="flex justify-between items-center mb-4">
        <View className="text-xl font-light relative">
          <View>无限卡牌</View>
          <View className="absolute bottom-[-1] left-1/2 transform -translate-x-1/2 bg-green-400 w-4/5 h-1 rounded-lg"></View>
        </View>
        <View>售价</View>
      </View>

      <View className="overflow-x-auto w-full mb-3">
        <View className="grid grid-flow-col gap-2 auto-cols-max min-w-max">
          {CARD_TYPE.map((type, index) => {
            return (
              <View
                key={index}
                className="text-xs px-2 py-1 rounded-lg bg-white border border-gray-200 first:bg-gray-800 first:text-green-300"
              >
                {type}
              </View>
            );
          })}
        </View>
      </View>
      
      <View className="grid grid-cols-2 gap-3">
        {[...Array(20)].map((_, i) => {
          return (
            <View
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden shadow"
            >
              <View className="bg-blue-300 w-full h-48 relative">
                <View className="absolute bottom-2 right-2 bg-gray-800/80 text-white text-xs rounded-lg px-2 py-1">
                  5张/包
                </View>
              </View>
              <View className="p-2">
                <View className="">晶晶奇迹</View>
                <View className="my-1">¥ 5</View>
                <View className="text-xs text-gray-400">
                  近24小时已抽2万+张卡
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
