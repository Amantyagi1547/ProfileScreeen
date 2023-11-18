import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='ProfileScreen'>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:true,headerBackVisible:true,title:"View patient"}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
