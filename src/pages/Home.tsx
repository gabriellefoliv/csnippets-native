import {
  FlatList,
  Text,
  View,
} from "react-native";

import { Header } from "../components/header";
import { useCallback, useState } from "react";
import { Snippet, SnippetProps } from "../components/snippet";

import {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { AddButton } from "../components/add-button";

import {
  NavigationProps,
} from "../routes/RootStackParamList";

export default function Home({ navigation }: NavigationProps<"CreateSnippet">) {
  // Async Storage

  const [data, setData] = useState<SnippetProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@csnippets:snippets");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((item: SnippetProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  // Search Functionality
  const [search, setSearch] = useState("");

  function handleSearch(event: any) {
    const query = event.target.value;
    setSearch(query);
  }

  const filteredSnippets =
    search !== "" ? data.filter((snippet) => snippet.snippetTitle) : data;

  return (
    <View>
      <Header title="Code Snippets" />

      <AddButton navigation={navigation} />

      <Text className="text-right px-6 font-bold text-xl">
        {`${data.length} ao total`}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Snippet data={item} onPress={() => handleRemove(item.id)} />
        )}
      />
    </View>
  );
}
