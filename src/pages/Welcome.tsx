import LottieView from "lottie-react-native";
import { Text, TouchableOpacity, View } from "react-native";


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



import { NavigationProps } from "../routes/RootStackParamList";

export default function Welcome({ navigation }: NavigationProps<'HomeTabs'>) {

    return (

        <View className="flex-1 items-center justify-center bg-sky-200">
            <KeyboardAwareScrollView>

                <View className=" w-full mt-28 h-96 p-4 justify-center items-center">
                    <LottieView
                        source={require('../assets/w-animation.json')}
                        style={{ width: "70%", height: "70%" }}
                        autoPlay
                        loop
                    />
                    <Text className="text-white font-bold text-4xl">Code Snippets</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('HomeTabs')}>
                    <View className="bg-white p-2 px-28 py-4 rounded-lg">
                        <Text className="font-bold text-md">Acessar</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}

// async storage
// image picker
// view shot
// expo sharing