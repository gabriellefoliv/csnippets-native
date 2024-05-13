import { FlatList, Text, View } from "react-native";

import { Header } from "../components/header";
import { useCallback, useEffect, useState } from "react";
import { CreateSnippet } from "../components/create-snippet";
import { Snippet, SnippetProps } from "../components/snippet";

import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { AddButton } from "../components/addButton";
  


export default function Home() {

    const [data, setData] = useState<SnippetProps[]>([])

    const { getItem, setItem } = useAsyncStorage("@csnippets:snippets")

    async function handleFetchData() {
      const response = await getItem() 
      const data = response ? JSON.parse(response) : []
      setData(data)
    }

    async function handleRemove(id: string) {
      const response = await getItem() 
      const previousData = response ? JSON.parse(response) : []

      const data = previousData.filter((item: SnippetProps) => item.id !== id)
      setItem(JSON.stringify(data))
      setData(data)
    }

    useFocusEffect(useCallback(() => {
      handleFetchData()
    }, []))
  
    return (
      <View>
  
        <Header title="Code Snippets" />

        <AddButton />

        <Text>
          {`${data.length} ao total`}
        </Text>
        
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Snippet
              data={item}
              onPress={() => handleRemove(item.id)}
            />
          }
        />
  
      </View>
    );
  }
  
