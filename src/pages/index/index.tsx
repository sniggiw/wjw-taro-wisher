import { useEffect, useState } from "react";
import {
    View,
    Image,
    Swiper,
    SwiperItem,
    ScrollView,
} from "@tarojs/components";
import { useLoad, createSelectorQuery, pageScrollTo } from "@tarojs/taro";
import classnames from "classnames";
import "./index.scss";

import { Random } from "mockjs";

const NAV_TABS = [
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

    const [navTabFixed, setNavTabFixed] = useState(false);
    const [navTabInfo, setNavTabInfo] = useState({ top: 0, height: 0 });
    const [showBackToTop, setShowBackToTop] = useState(false);
    const handleScroll = (e: any) => {
        if (e.detail.scrollTop >= 400) {
            setShowBackToTop(true);
        }

        if (e.detail.scrollTop >= navTabInfo.top) {
            setNavTabFixed(true);
        } else {
            setNavTabFixed(false);
        }
    };

    const [navTabActiveIndex, setNavTabActiveIndex] = useState(0);
    const handleSwitchNavTab = (index: number) => {
        setNavTabActiveIndex(index);
    };

    const [cardList, setCardList] = useState<any[]>([]);
    const [cardTotal, setCardTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleGetMoreCardData = () => {
        const newData = [...Array(10)].map((_, i) => {
            return {
                id:
                    i +
                    Random.integer(1, 100) +
                    Random.datetime("yyyy-MM-DD- HH:mm:ss"),
                title: Random.ctitle(4, 20),
                number: Random.integer(1, 20),
                price: Random.integer(1, 10000),
                img: `https://picsum.photos/id/${Random.integer(1, 100)}/44`,
                hours: Random.integer(1, 24),
                getNumber: Random.integer(1, 10000),
            };
        });

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setCardList([...cardList, ...newData]);
        }, 500);
    };

    const handleBackToTop = () => {
        createSelectorQuery()
            .select("#scrollview")
            .node()
            .exec((res) => {
                const scrollView = res[0].node;
                scrollView.scrollTo({
                    scrollTop: 0,
                    duration: 300,
                });
            });
    };

    useEffect(() => {
        setCardList(
            [...Array(10)].map((_, i) => {
                return {
                    id:
                        i +
                        Random.integer(1, 100) +
                        Random.datetime("yyyy-MM-DD- HH:mm:ss"),
                    title: Random.ctitle(4, 20),
                    number: Random.integer(1, 20),
                    price: Random.integer(1, 10000),
                    img: `https://picsum.photos/id/${Random.integer(
                        1,
                        100
                    )}/44`,
                    hours: Random.integer(1, 24),
                    getNumber: Random.integer(1, 10000),
                };
            })
        );

        setCardTotal(50);
    }, []);

    useEffect(() => {
        createSelectorQuery()
            .select("#navTab")
            .boundingClientRect()
            .exec(function (res) {
                setNavTabInfo(res[0]);
            });
    }, []);

    return (
        <ScrollView
            id="scrollview"
            className="scrollview"
            style={{ height: "100vh" }}
            scrollY
            enhanced={true}
            scrollWithAnimation
            onScroll={handleScroll}
            lowerThreshold={50}
            onScrollToLower={() => {
                if (loading) return;
                if (cardList.length < 50) handleGetMoreCardData();
            }}
        >
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
                    src={`https://picsum.photos/id/${Random.integer(
                        1,
                        100
                    )}/500/200`}
                ></Image>
            </View>

            {/* sort */}
            <View className="flex justify-between items-center mb-5 px-2">
                <View className="text-xl relative">
                    <View style={{ fontStyle: "italic" }}>无限卡牌</View>
                    <View className="absolute bottom-[-1] left-1/2 transform -translate-x-1/2 bg-green-600 w-4/5 h-1 rounded-lg"></View>
                </View>
                <View
                    className="flex items-center gap-0.5"
                    onClick={handleSort}
                >
                    <View>售价</View>
                    <View className="flex flex-col gap-0.5">
                        <View
                            className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] ${
                                sort === "asc"
                                    ? "border-b-green-600"
                                    : "border-b-black"
                            }`}
                        ></View>
                        <View
                            className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] ${
                                sort === "desc"
                                    ? "border-t-green-600"
                                    : "border-t-black"
                            }`}
                        ></View>
                    </View>
                </View>
            </View>

            {/* nav tabs */}
            <View
                id="navTab"
                className={classnames("overflow-x-auto w-full px-2 py-2", {
                    "fixed top-0 z-10 bg-slate-50 pb-3 shadow": navTabFixed,
                })}
            >
                <View className="grid grid-flow-col gap-2 auto-cols-max min-w-max">
                    {NAV_TABS.map((type, index) => {
                        return (
                            <View
                                key={index}
                                className={classnames(
                                    "text-xs py-2 px-3 rounded-2xl bg-white border border-gray-200",
                                    index == navTabActiveIndex
                                        ? "bg-gray-800 text-green-300"
                                        : ""
                                )}
                                onClick={() => {
                                    handleSwitchNavTab(index);
                                }}
                            >
                                {type}
                            </View>
                        );
                    })}
                </View>
            </View>

            {/* card list */}
            <View
                className={classnames("grid grid-cols-2 gap-3 px-2")}
                style={{
                    paddingTop: navTabFixed ? `${navTabInfo.height + 2}px` : 0,
                }}
            >
                {cardList.map((card, i) => {
                    return (
                        <View
                            key={i}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow"
                        >
                            <View className="w-full h-44 relative">
                                <Image
                                    src={card.img}
                                    className="w-full h-full object-cover"
                                ></Image>
                                <View className="absolute bottom-2 right-2 bg-gray-800/80 text-white text-xs rounded-lg px-2 py-1">
                                    {card.number}张/包
                                </View>
                            </View>
                            <View className="p-2">
                                <View className="truncate font-light">
                                    {card.title}
                                </View>
                                <View className="my-2">¥{card.price}</View>
                                <View className="text-xs text-gray-400">
                                    近{card.hours}小时已抽 {card.getNumber}{" "}
                                    万+张卡
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>

            {/* load more and no more */}
            <View className="flex justify-center items-center py-10">
                {loading && (
                    <View className="text-gray-400 text-sm">正在加载中...</View>
                )}
                {cardList.length == cardTotal && (
                    <View className="text-gray-400 text-sm">没有更多了</View>
                )}
            </View>

            {/* back to top */}
            {showBackToTop && (
                <View
                    className="fixed bottom-10 right-10 z-50 p-3 rounded-full bg-green-600 flex justify-center items-center text-white opacity-80"
                    onClick={handleBackToTop}
                >
                    ⬆
                </View>
            )}
        </ScrollView>
    );
}
