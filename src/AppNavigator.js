import {  NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";

const Stack = createStackNavigator();

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
                <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
