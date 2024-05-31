import { Alert, ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import { Account } from "../components/account";

import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";


export default function Profile() {

    const [image, setImage] = useState("")

    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
            })

            if (result.assets) {
                setImage(result.assets[0].uri)
            }
        } catch (error) {
            console.log(error)
            Alert.alert("Foto", "Não foi possível selecionar a imagem.")
        }
    }

    return (
        <View>
            <Header title="Minha conta" />
            <ScrollView contentContainerClassName="px-8 pb-8 w-full items-center justify-center" showsVerticalScrollIndicator={false}>

                <Account
                    image={image}
                    onChangeAvatar={handleSelectImage}
                />

                <View>
                    <Text className="font-bold text-xl mt-8">
                        Meus favoritos
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}