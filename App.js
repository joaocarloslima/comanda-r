import { NavigationContainer } from "@react-navigation/native";
import Comanda from "./screens/Comanda";
import Login from "./screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "./screens/Produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comanda" component={Comanda} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
