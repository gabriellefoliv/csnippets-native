import { Button, Text, TouchableOpacity, View } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale'

import { MaterialIcons, Feather } from '@expo/vector-icons'
import { useState } from "react";

export type SnippetProps = {
    id: string
    snippetTitle: string
    snippet: string
}

type Props = {
    data: SnippetProps
    onPress: () => void
}

export function Snippet({ data, onPress }: Props) {

    return (
        <View className="w-full flex-row p-4 ">
            <View className=" flex-row w-full border-black/20 border-2 rounded-xl">

                <View className="px-8 py-12 flex-1 rounded-md">
                    <Text className="font-bold text-xl">
                        {data.snippetTitle}
                    </Text>

                    <View className="mt-4">
                        <Text className="text-gray-500">{data.snippet}</Text>
                    </View>

                </View>

                <View className='justify-center items-center'>

                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <View className="py-4 px-8">

                            <MaterialIcons
                                name="delete"
                                size={22}
                                color="#888D97"
                            />

                        </View>
                    </TouchableOpacity>


                    {/* <TouchableOpacity>
                            <View>
                                <Feather name="star" size={22}/>
                            </View>
                        </TouchableOpacity> */}

                </View>
            </View>
        </View>
    )
}