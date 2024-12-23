import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Home/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => (
 <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen 
   name="Detail"
   component={Detail}
   options={{ title: 'Detail View' }}
   />
  </Stack.Navigator>
 </NavigationContainer>
);

export default Routes;
