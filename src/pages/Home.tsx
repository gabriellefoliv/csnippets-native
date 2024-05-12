import { Button, Pressable, SafeAreaView, ScrollView, Text, TextInput, TextInputChangeEventData, Touchable, TouchableOpacity, View } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons'
import { Header } from "../components/header";
import { ChangeEvent, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CreateSnippet} from "../components/create-snippet";
import { Snippet } from "../components/snippet";


  
export default function Home() {
    const [search, setSearch] = useState('')
  
    return (
      <View>
  
        <Header title="Code Snippets" />

        <View>
          <CreateSnippet/>
          <Snippet/>
          <Snippet/>
          <Snippet/>
          <Snippet/>
        </View>
  
      </View>
    );
  }
  
