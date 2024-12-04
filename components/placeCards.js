import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const places = [
  {
    id: "1",
    name: "STI College Novaliches",
    image: require("../assets/images/sti-college.png"),
  },
  {
    id: "2",
    name: "SM City Novaliches",
    image: require("../assets/images/sm-novaliches.png"),
  },
  {
    id: "3",
    name: "Hotel Sogo Novaliches",
    image: require("../assets/images/sogo-novaliches.png"),
  },
  {
    id: "4",
    name: "Jollibee North Fairview",
    image: require("../assets/images/jollibee-fairview.png"),
  },
];

const PlaceCards = () => {
  const renderPlace = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={places}
      renderItem={renderPlace}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

export default PlaceCards;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    marginRight: 15,
    alignItems: "center",
    width: 180,
  },
  image: {
    width: 200, // Larger image width
    height: 200, // Larger image height
    borderRadius: 15,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
