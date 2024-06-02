import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
    Home: undefined;
    Favorites: undefined;
    Profile: undefined;
    Welcome: undefined;
    CreateSnippet: undefined;
    HomeTabs: undefined;
}

export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>;
}