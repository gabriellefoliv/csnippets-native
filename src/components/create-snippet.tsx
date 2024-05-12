import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Editor from "./editor";
import { ChangeEvent, FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";


export function CreateSnippet() {
    
    return (
        <Dialog>
            <DialogTrigger >
                <Text className='text-sm font-medium text-slate-200'>
                    Adicionar nota
                </Text>
                <Text className='text-sm leading-6 text-slate-500'>
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </Text>
            </DialogTrigger>
                <DialogContent className='fixed overflow-hidden md:left-1/2 inset-0 md:inset-auto md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-slate-700 md:rounded-md flex flex-col outline-none'>
                    
                    <View className='flex-1 flex flex-col'>

                        <View className='flex flex-1 flex-col gap-3 p-5'>      
                            
                        </View>

                    </View>

                </DialogContent>
        </Dialog>
    )
}