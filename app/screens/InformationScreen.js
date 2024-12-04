import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import crashImage from "../../assets/images/crash1.png"; // Import the local image
import { Ionicons } from "react-native-vector-icons"; // Import Ionicons for icons
import { useNavigation } from "@react-navigation/native";

const InformationScreen = () => {
  const [location, setLocation] = useState("");
  const [liked, setLiked] = useState(false); // Track whether the post is liked
  const navigation = useNavigation();
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("selectedLocation");
        if (savedLocation) {
          setLocation(savedLocation);
        }
      } catch (error) {
        console.error("Error fetching location from local storage:", error);
      }
    };

    fetchLocation();
  }, []);

  const handleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen (home)
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercont}>
        <Text style={styles.title}>Road Alert</Text>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.text}>{location}</Text>
      </View>

      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.informationContainer}
      >
        <Text style={styles.username}>User32131 - 2 mins ago</Text>
        <Image source={crashImage} style={styles.userImage} />

        <Text style={styles.caption}>
          May motor na banga ng close van tang ina naman!!!
        </Text>

        <View style={styles.iconContainer}>
          {/* Like Button */}
          <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"} // Change icon based on like status
              size={24}
              color={liked ? "red" : "white"} // Turn red when liked
            />
          </TouchableOpacity>

          {/* Comment Button */}
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="white" // Comment icon color
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headercont: {
    flexDirection: "row",
  },
  header: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    color: "#003366",
  },
  text: {
    fontSize: 18,
    color: "#003366",
  },
  informationContainer: {
    padding: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  username: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 10,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 300,
    marginTop: 10,
  },
  userImage: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10, // Space between the image and text
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  iconButton: {
    marginRight: 20, // Space between the icons
  },
  backButton: {
    position: "absolute",
    right: 1,
    top: 25,
    color: "#003366",
  },
});
