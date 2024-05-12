import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Button, Text, TouchableOpacity, View } from "react-native";


export default function Welcome() {

    const {navigate} = useNavigation() 

    function handleNavigation() {
        navigate('HomeTabs')
    }

    return (
        <View className="flex-1 items-center justify-center bg-sky-200">

            <View className=" w-full h-96 p-4 justify-center items-center">
                <LottieView 
                    source={require('../assets/w-animation.json')}
                    style={{width: "70%", height: "70%"}}
                    autoPlay
                    loop
                />
                <Text className="text-white font-bold text-4xl">Code Snippets</Text>
            </View>


            <TouchableOpacity activeOpacity={0.7} onPress={handleNavigation}>
                <View className="bg-white p-2 px-28 py-4 rounded-lg">
                    <Text className="font-bold text-md">Acessar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}