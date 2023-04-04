import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";

const Tabs = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={MyTabs}
          options={{ headerShown: null }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Login" component={LoginScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
}
