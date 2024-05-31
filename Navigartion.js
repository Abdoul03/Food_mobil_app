import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import PanierScreen from "./screens/PanierScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfilScreen from "./screens/ProfilScreen";
const Stack = createNativeStackNavigator();

const Navigartion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resto" component={RestaurantScreen} />
        <Stack.Screen name="Panier" component={PanierScreen} />
        <Stack.Screen name="Order" component={OrdersScreen} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigartion;
