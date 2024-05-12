import { Button, Text, TouchableOpacity, View } from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale'

export function Snippet() {
    return (
        <Dialog>
            <DialogTrigger>
            <Text className='text-sm font-medium text-slate-300'>
            </Text>
            <Text className='text-sm leading-6 text-slate-500'>
                Lalalala
            </Text>
            <View className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
            </DialogTrigger>

                <DialogContent className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-slate-700 md:rounded-md flex flex-col outline-none'>
                    
                    <View className='flex flex-1 flex-col gap-3 p-5'>
                        <Text className='text-sm font-medium text-slate-300'>
                        </Text>
                        <Text className='text-sm leading-6 text-slate-600'>
                        </Text>
                    </View> 

                                 
                </DialogContent>

        </Dialog>
    )
}