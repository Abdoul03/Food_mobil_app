import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = ({ nourriture }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          {/* <Image className="w-full h-72" source={resto.image} /> */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2 bg-green-200"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
