import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Profile from "../pages/Profile"
import Favorites from "../pages/Favorites"

import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "",
                    borderTopWidth: 0,
                    minHeight: 54,
                },
                tabBarItemStyle: {
                    paddingBottom: 12,
                    paddingTop: 12,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "",
                tabBarInactiveTintColor: "",
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: (tabInfo) => { 
                        return ( 
                          <FontAwesome5 
                            name="home"
                            size={20} 
                            color={tabInfo.focused ? "bg-cyan-900/70" : "#8e8e93"} 
                          /> 
                        ); 
                    }
                }}
            />
            <Tab.Screen name="Favoritos" component={Favorites} 
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <AntDesign 
                                name="star"
                                size={20} 
                                color={tabInfo.focused ? "bg-cyan-900/70":""}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen name="Perfil" component={Profile} 
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <FontAwesome 
                                name="user" 
                                size={20} 
                                color={tabInfo.focused ? "bg-cyan-900/70":""}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}