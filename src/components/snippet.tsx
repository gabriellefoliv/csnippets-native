import { Button, Text, TouchableOpacity, View } from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale'

import {MaterialIcons} from '@expo/vector-icons'

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
        <View className="w-full p-4 flex-row">
            <View className="px-8 py-4 bg-red-200 flex-1 rounded-md">
                <Text className="font-bold text-xl">
                    {data.snippetTitle}
                </Text>

            <View>
                <Text>{data.snippet}</Text>
            </View>

            </View>
            <TouchableOpacity
                onPress={onPress}
                >
                <MaterialIcons
                    name="delete"
                    size={22}
                    color="#888D97"
                />
            </TouchableOpacity>
        </View>
    )
}