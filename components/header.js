import { StyleSheet, Text, View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/user2.png")}
        style={{ width: 60, height: 60, borderRadius: 99, borderWidth: 2 }}
      />
      <Image
        source={require("../assets/images/logoblack.png")}
        style={{ width: 150, height: 45, objectFit: "contain" }}
      />
      <AntDesign name="filter" size={24} color="black" />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
