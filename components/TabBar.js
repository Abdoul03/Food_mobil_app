import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

const TabBar = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute top-96 w-full z-50 pt-96 -pb-10">
      <View
        style={{ backgroundColor: "gray" }}
        className="flex-row justify-between items-center mx-4 rounded-full p-4 py-3 shadow-lg"
      >
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon.Home color="orange" width="35" height="30" />
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Resto")}>
            <Text className="text-white">Resto</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Panier")}>
            <Icon.ShoppingBag color="orange" width="35" height="30" />
            <Text className="text-white">Panier</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Order")}>
            <Text className="text-white">Order</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
            <Text className="text-white">Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TabBar;
