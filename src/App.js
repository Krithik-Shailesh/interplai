import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//Screens
import SplashScreen from './pages/SplashScreen';
import DashBoard from './pages/DashBoard';
import Favourites from './pages/Favourites';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  
  render() {

    const Root = () => {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="DashBoard" component={DashBoard} />
          <Drawer.Screen name="Favourites" component={Favourites} />
        </Drawer.Navigator>
      );
    }

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RootScreen" component={Root} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

export default App;