import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Pizza",
      image: require("../assets/categories/icons8-pizza-96.png"),
    },
    {
      id: 2,
      name: "Burger",
      image: require("../assets/categories/icons8-hamburger-96.png"),
    },
    {
      id: 3,
      name: "Gateau",
      image: require("../assets/categories/icons8-cupcake-emoji-96.png"),
    },
    {
      id: 4,
      name: "spaghetti",
      image: require("../assets/categories/spaghetti-96.png"),
    },
    {
      id: 4,
      name: "Boisons",
      image: require("../assets/categories/tropical-drink-96.png"),
    },
    {
      id: 5,
      name: "Poisson",
      image: require("../assets/categories/tropical-fish-96.png"),
    },
  ];
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={"p-1 rounded-full shadow bg-gray-200" + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm" + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
