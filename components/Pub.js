import { View, Text, Image } from "react-native";
import React from "react";

const Pub = () => {
  return (
    <View className="w-full mb-8 border border-gray-300 rounded-lg">
      <View className="flex flex-row">
        <View className="w-3/5 bg-green-200 pl-2">
          <Text className="font-bold text-xl text-center pt-3 text-gray-700">
            Promo Ramadha !
          </Text>
          <Text className="text-gray-700 text-center text-xs">
            Livrason Gratuite pour tous les menbres
          </Text>
          <Text className="pr-10 text-5xl font-bold text-red-300 pt-5 pb-5">
            60%
          </Text>
          <Text className="font-semibold text-gray-700">
            11 Mars - 10 Avr 2024
          </Text>
        </View>
        <View className="w-2/5">
          <Image
            source={require("../assets/download (6) (1).jpeg")}
            className="w-full h-48 rounded-lg"
          />
        </View>
      </View>
    </View>
  );
};

export default Pub;
