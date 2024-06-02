import { Text, TouchableOpacity, View } from "react-native";

import { Feather } from '@expo/vector-icons'
import { NavigationProps } from "../routes/RootStackParamList";

type Props = NavigationProps<'CreateSnippet'>

export function AddButton({ navigation }: Props) {


    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('CreateSnippet')}>
            <View className="flex-row w-full justify-center items-center h-28 ">
                <View className="bg-gray-200 flex-row p-6 justify-center items-center px-20 rounded-xl border-black/25 border-solid border-2">

                    <Feather name="plus" size={24} color="gray" />
                    <Text className="font-bold text-gray-500">
                        Adicione um Snippet
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}