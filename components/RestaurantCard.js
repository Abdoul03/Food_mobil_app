import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = () => {
  const navigation = useNavigation();
  const Restaurants = [
    {
      id: 1,
      name: "The Burgery.",
      image: require("../assets/restaurants/food3.jpg"),
      category: "Burger",
      adresse: "ACI 2000",
      nourriture: [
        {
          id: 1,
          name: "Mini Pizza",
          description: "Cheezy garlic pizza",
          price: 1000,
          //   image: require(""),
        },
        {
          id: 2,
          name: "Mini Pizza",
          description: "Craipe sucrer",
          price: 1000,
          //   image: require(""),
        },
        {
          id: 3,
          name: "Mini KFC",
          description: "Cheezy garlic KFC",
          price: 1500,
          //   image: require(""),
        },
        {
          id: 4,
          name: "Soupe",
          description: "Soupe Concentre",
          price: 2000,
          //   image: require(""),
        },
      ],
    },
    {
      id: 2,
      name: "Noodle Pack",
      image: require("../assets/restaurants/disadvantages-of-fast-food (1).webp"),
      category: "Pizza",
      adresse: "Niamana",
      nourriture: [
        {
          id: 1,
          name: "Pastel",
          description: "Pastel Avec laitue",
          price: 1000,
          // image: require("../assets/dishes/download (3) (1).jpeg"),
        },
        {
          id: 2,
          name: "Pancake",
          description: "Hot Pancake",
          price: 1500,
          // image: require("../assets/dishes/download (3) (2).jpeg"),
        },
        {
          id: 3,
          name: "Pasta",
          description: "Pasta sauce",
          price: 1500,
          // image: require("../assets/dishes/download (3) (3).jpeg"),
        },
        {
          id: 4,
          name: "Fire Fish",
          description: "Hot sea Fish",
          price: 1000,
          // image: require("../assets/dishes/download (4) (1).jpeg"),
        },
      ],
    },
    {
      id: 3,
      name: "Pita House",
      image: require("../assets/restaurants/rawImage.jpg"),
      category: "Fast Food",
      adresse: "Bakodjiroroni Golf",
      nourriture: [],
    },
    {
      id: 4,
      name: "Yummy chicken",
      image: require("../assets/restaurants/bdcd233971b7c81bf77e1fa4471280eb (1).webp"),
      category: "Fast Food",
      adresse: "Niarela",
      nourriture: [],
    },
    {
      id: 5,
      name: "Pizza & Co.",
      image: require("../assets/restaurants/n7yx-hero.jpg"),
      category: "Fast Food",
      adresse: "Sotuba",
      nourriture: [],
    },
  ];
  return (
    <View>
      {Restaurants.map((resto) => {
        return (
          <TouchableOpacity>
            <View key={resto.id} className="flex flex-col  rounded-lg mb-4">
              <Image source={resto.image} className="h-36 w-full rounded-lg" />
              <View className="flex flex-row pr-2">
                <Text className="font-bold text-xl text-gray-700 pt-2">
                  {resto.name}
                </Text>
                <Text className="text-lg pl-4 pt-2 text-gray-700">
                  .{resto.adresse}
                </Text>
              </View>
              <Text className="font-semibold text-lg text-gray-700">
                {resto.category}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RestaurantCard;
