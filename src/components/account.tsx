import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

type Props = { image?: string; onChangeAvatar?: () => void };

export function Account({ onChangeAvatar, image }: Props) {
    return (
        <View className="w-full self-stretch items-center -mt-20">
            <Image
                source={require("../assets/band.png")}
                className="w-24 h-52 z-10"
            />

            <View className="bg-teal-900 self-stretch items-center pb-20 border border-white/10 mx-3 rounded-2xl -mt-5">
                <ImageBackground
                    source={require("../assets/header.png")}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold">
                            Code Snippets
                        </Text>
                        <Text className="text-zinc-50 text-sm font-bold">#111</Text>
                    </View>

                    <View className="w-40 h-40 bg-slate-500 rounded-full" />
                </ImageBackground>

                {image ? (
                    <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
                        <Image
                            source={{ uri: image }}
                            className="w-36 h-36 rounded-full -mt-24"
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
                        <View className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center">
                            <Feather name="camera" size={32} />
                        </View>
                    </TouchableOpacity>
                )}

                <Text className="font-bold text-2xl text-zinc-50 mt-4">
                    Gabrielle Oliveira
                </Text>

                <Text className="font-regular text-base text-zinc-300 mb-4">
                    gabrielle@email.com
                </Text>
            </View>
        </View>
    );
}
