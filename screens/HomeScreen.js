import { View, Text, TextInput, StatusBar, ScrollView } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import Pub from "../components/Pub";
import { Restaurants } from "../constants";
import Resto from "../components/Resto";
// import TabBar from "../components/TabBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* <TabBar /> */}
      <View className="px-4 pt-6">
        <Text className="text-lg font-semibold pb-2">Bienvenue</Text>
        <Text className="font-bold text-2xl">Abdoul. 👋</Text>
      </View>
      {/* search bar */}
      <View className="flex flex-row items-center space-x-2 px-4 pb-2 pt-6">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        <Pub />
        <Categories />
        {/* featured */}
        <View>
          {Restaurants.map((resto, index) => {
            return (
              <Resto
                images={resto.image}
                name={resto.name}
                cate={resto.category}
                adress={resto.adresse}
                nourriture={resto.nourriture}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
