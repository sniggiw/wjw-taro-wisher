import { useState } from "react";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import { Random } from "mockjs";

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

  const [sort, setSort] = useState("");

  const handleSort = () => {
    if (sort === "") {
      setSort("asc");
    }

    if (sort === "asc") {
      setSort("desc");
    }

    if (sort === "desc") {
      setSort("");
    }
  };

  return (
    <View className="index">
      {/* swiper */}
      <Swiper
        className="index-swiper bg-slate-50"
        indicatorColor="#f8fafc"
        indicatorActiveColor="#16a34a"
        interval={2000}
        circular
        indicatorDots
        autoplay
      >
        {[...Array(5)].map((_, i) => {
          return (
            <SwiperItem key={i}>
              <View className="w-full h-full bg-slate-50 px-2 py-1">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={`https://picsum.photos/id/${Random.integer(
                    1,
                    100
                  )}/400/200`}
                />
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>

      {/* banner */}
      <View className="h-32 w-full mt-4 mb-5 px-2 flex items-center justify-center shadow">
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={`https://picsum.photos/id/${Random.integer(1, 100)}/500/200`}
        ></Image>
      </View>

      <View className="flex justify-between items-center mb-5 px-2">
        <View className="text-xl font-light relative">
          <View>无限卡牌</View>
          <View className="absolute bottom-[-1] left-1/2 transform -translate-x-1/2 bg-green-600 w-4/5 h-1 rounded-lg"></View>
        </View>
        <View className="flex items-center gap-0.5" onClick={handleSort}>
          <View>售价</View>
          <View className="flex flex-col gap-0.5">
            <View
              className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] ${
                sort === "asc" ? "border-b-green-600" : "border-b-black"
              }`}
            ></View>
            <View
              className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] ${
                sort === "desc" ? "border-t-green-600" : "border-t-black"
              }`}
            ></View>
          </View>
        </View>
      </View>

      <View className="overflow-x-auto w-full mb-2 px-2">
        <View className="grid grid-flow-col gap-2 auto-cols-max min-w-max">
          {CARD_TYPE.map((type, index) => {
            return (
              <View
                key={index}
                className="text-xs py-2 px-3 rounded-2xl bg-white border border-gray-200 first:bg-gray-800 first:text-green-300"
              >
                {type}
              </View>
            );
          })}
        </View>
      </View>

      <View className="grid grid-cols-2 gap-3 px-2">
        {[...Array(20)].map((_, i) => {
          return (
            <View
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden shadow"
            >
              <View className="w-full h-44 relative">
                <Image
                  src={`https://picsum.photos/id/${Random.integer(1, 100)}/44`}
                  className="w-full h-full object-cover"
                ></Image>
                <View className="absolute bottom-2 right-2 bg-gray-800/80 text-white text-xs rounded-lg px-2 py-1">
                  {Random.integer(1, 20)}张/包
                </View>
              </View>
              <View className="p-2">
                <View className="truncate font-light">{Random.ctitle(4, 20)}</View>
                <View className="my-2">¥{Random.integer(1, 100)}</View>
                <View className="text-xs text-gray-400">
                  近{Random.integer(1, 24)}小时已抽 {Random.integer(1, 10)}{" "}
                  万+张卡
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
