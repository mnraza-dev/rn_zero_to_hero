import {  NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Intro from "./screens/Intro";

const Stack = createStackNavigator();

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
                <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
                <Stack.Screen name="Intro" options={{headerShown:false}} component={Intro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
