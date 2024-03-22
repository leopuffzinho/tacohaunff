import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Home from './src/Home';
import MinhaConta from './src/MinhaConta';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';


const Tab = createBottomTabNavigator();


export default function App() {

  const[logado, setLogado] = useState(false);
  const[cadastro, setCadastro] = useState(false);

  if(logado == false) {
    return(<Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }
  
  if(cadastro) {
    return(<Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {backgroundColor: "#D6B44B"},
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        headerShown: false
      }}
      >
      <Tab.Screen name="HOME" component = {Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-outline" color={color}  size={size} />
          ),
        }} />
        <Tab.Screen name="Minha Conta" component = {MinhaConta} options={{
          tabBarLabel: 'Minha Conta',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color}  size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}