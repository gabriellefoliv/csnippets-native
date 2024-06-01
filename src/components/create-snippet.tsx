import {
  Keyboard,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "./header";

import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import uuid from "react-native-uuid";

import Toast from "react-native-toast-message";

import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { Language, LanguageSelector } from "./language-selector";
import { useNavigation } from "@react-navigation/native";

export function CreateSnippet() {
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  
  const { navigate } = useNavigation()
  
  // Async Storage
  
  const { getItem, setItem } = useAsyncStorage("@csnippets:snippets");

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        snippetTitle,
        snippet,
      };

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));

      Toast.show({
        type: "success",
        text1: "Snippet salvo com sucesso!",
      });


      navigate("Home")


    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Erro ao armazenar snippet!",
      });
    }
  }

  // Share snippet

  const viewRef = useRef<View>(null);

  const captureAndShareScreenshot = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 1,
      });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error capturing or sharing screenshot:", error);
    }
  };

  // Language Selector

  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("typescript");
  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  // Keyboard dismiss

  const handleKeyPress = (key: string) => {
    if (key === "Enter") {
      Keyboard.dismiss(); // Dismiss the keyboard when the enter key is pressed
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header title="Crie seu Snippet!" />

        <View ref={viewRef} className="bg-white">
          <LanguageSelector onChange={handleLanguageChange} />

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
                language={selectedLanguage}
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
                onChange={setSnippet}
                onKeyPress={handleKeyPress}
              />
            </View>
          </ScrollView>
        </View>

        <View className="m-4">
          <TouchableOpacity onPress={handleNew}>
            <View className="w-full justify-center items-center bg-cyan-800/20">
              <Text className="p-4 font-bold">Salvar Snippet</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={captureAndShareScreenshot}>
            <View className="w-full justify-center items-center bg-cyan-800/20 mt-4">
              <Text className="p-4 font-bold">Compartilhar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
