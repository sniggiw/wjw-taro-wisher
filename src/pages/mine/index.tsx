import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import Header from "./components/Header";

export default function Mine() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View className="mine">
            <Header />
        </View>
    );
}
