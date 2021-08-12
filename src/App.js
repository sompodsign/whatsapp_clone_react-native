import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: '#f1c40f',
  },
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const App = () => {

  return (
    <>
    
    <PaperProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor="green" />
      <View style={styles.container}>
        <Navigation />
      </View>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
