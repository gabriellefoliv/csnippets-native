import './src/styles/global.css'
import Welcome from './src/pages/Welcome'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeTabs from './src/routes/routes'
import { CreateSnippet } from './src/components/create-snippet'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
      
        />
        <Stack.Screen 
          name="HomeTabs" 
          component={HomeTabs}
          
        />
        <Stack.Screen 
          name="CreateSnippet" 
          component={CreateSnippet}
          
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
