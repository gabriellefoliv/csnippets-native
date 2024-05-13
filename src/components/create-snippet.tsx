import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Editor from "./editor";
import { ChangeEvent, FormEvent, useState } from "react";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from "./header";

import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import uuid from 'react-native-uuid'

import Toast from 'react-native-toast-message'

export function CreateSnippet() {

    const [snippetTitle, setSnippetTitle] = useState("")
    const [snippet, setSnippet] = useState("")

    const { getItem, setItem } = useAsyncStorage("@csnippets:snippets")

    async function handleNew() {
        try {
            const id = uuid.v4()

            const newData = {
                id, 
                snippetTitle,
                snippet
            }

            const response = await getItem()
            const previousData = response ? JSON.parse(response) : []

            const data = [...previousData, newData]

            await setItem(JSON.stringify(data))

            Toast.show({
                type:"success",
                text1:"Snippet salvo com sucesso!"
            })

        } catch (error) {
            console.log(error)

            Toast.show({
                type: "error",
                text1: "Erro ao armazenar snippet!"
            })

        }
    }
    
    return (
        <KeyboardAwareScrollView>
            <View>
                <Header title="Crie seu Snippet!"/>

                <View className="w-full p-4">
                    <TextInput
                        placeholder="Insira o título do snippet aqui..."
                        className="p-4 border-b-2 border-black/20 bg-gray-500/10 font-bold"
                        enterKeyHint="done"
                        onChangeText={setSnippetTitle}
                    />
                </View>

                <ScrollView>
                    <View className="p-4">
                        
                        <CodeEditor
                            style={{
                                fontSize: 20,
                                inputLineHeight: 26,
                                highlighterLineHeight: 26,
                            }}
                            language="javascript"
                            syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                            showLineNumbers
                            onChange={setSnippet}
                        />

                    </View>
                </ScrollView>

                <TouchableOpacity onPress={handleNew}>
                    <View className="w-full justify-center items-center bg-cyan-800/20">
                        <Text className="p-4">
                            Salvar Snippet
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </KeyboardAwareScrollView>
    )
}