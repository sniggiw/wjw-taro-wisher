import { View, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";

export default function Header() {
    return (
        <View className="bg-[#FFE661]">
            <View className="flex justify-between items-center">
                <View className="flex items-center justify-center ml-[24px]">
                    <View className="p-[5px] border flex rounded-tl-lg rounded-br-lg bg-gradient-to-b from-[#FFE86F] via-[#FFE661] to-[#FE9963]">
                        <Image
                            src="https://picsum.photos/200"
                            className="w-[78px] h-[78px] rounded-tl-lg rounded-br-lg"
                        />
                    </View>

                    <View className="flex flex-col ml-[20px]">
                        <View className="text-[40px] text-[#212326]">
                            暴龙使者
                        </View>
                        <View className="text-[26px] text-[#666666]">
                            13501500460
                        </View>
                    </View>
                </View>

                <View>
                    <Image
                        src={require("../../imgs/icon_more.png")}
                        className="w-[94px] h-[64px]"
                    />
                </View>
            </View>

            <View className="flex justify-center py-[24px]">
                <View className="w-[702px] h-[96px] p-[4px] border-[4px] rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-[#FFF002] to-[#FD8F17]">
                    <View className="bg-zinc-700 w-full h-full rounded-tl-lg rounded-tr-lg flex items-center px-[30px]">
                        <Image
                            src={require("../../imgs/icon_gold.png")}
                            className="w-[42px] h-[42px] mr-[10px] "
                        />
                        <View className="text-white text-[36px] font-bold italic">
                            我的优惠券
                        </View>
                        <View className="ml-auto text-[24px] text-[#FEBD1B] p-[8px] border rounded-tl-lg rounded-br-lg">
                            立即查看
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
