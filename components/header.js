import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  // Handle back button action
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* User Image */}
      <Image
        source={require("../assets/images/user2.png")}
        style={styles.userImage}
      />

      {/* Logo */}
      <Image
        source={require("../assets/images/logoblack.png")}
        style={styles.logo}
      />

      {/* Filter Icon */}
      <AntDesign name="filter" size={24} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  backButton: {
    padding: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 2,
  },
  logo: {
    width: 150,
    height: 45,
    resizeMode: "contain",
  },
});
