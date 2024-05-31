import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import uuid from 'react-native-uuid'

import Toast from 'react-native-toast-message'

export default function Welcome() {

    const { navigate } = useNavigation()

    function handleNavigation() {
        navigate('HomeTabs')
    }

    return (

        <View className="flex-1 items-center justify-center bg-sky-200">
            <KeyboardAwareScrollView>

                <View className=" w-full mt-12 h-96 p-4 justify-center items-center">
                    <LottieView
                        source={require('../assets/w-animation.json')}
                        style={{ width: "70%", height: "70%" }}
                        autoPlay
                        loop
                    />
                    <Text className="text-white font-bold text-4xl">Code Snippets</Text>
                </View>

                {/* <View className="pb-8 w-[250px]">
                        <Text className="font-bold mb-2">Insira o seu nome para continuar</Text>
                        
                        <TextInput
                            className="border-solid border-b-2  border-black/50 h-10 bg-white/20"
                            value={user} 
                            onChangeText={setUser}
                        />
                    </View>  */}

                {/* {user.trim().length >= 3 ? (
                        <TouchableOpacity activeOpacity={0.7} onPress={(handleNavigation)}>
                            <View className="bg-white p-2 px-28 py-4 rounded-lg">
                                <Text className="font-bold text-md">Acessar</Text>
                            </View>
                        </TouchableOpacity>
                    ) : null} */}

                <TouchableOpacity activeOpacity={0.7} onPress={(handleNavigation)}>
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