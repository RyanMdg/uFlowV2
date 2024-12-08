import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import React from "react";
import AlerSearchBar from "../../components/alertSearchBar.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Routes = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen (home)
  };

  const todas = ["JSGWU TODA", "PQH TODA"];
  const tricyle_todas = ["IQGQ TODA"];

  // Function to open the Grab app link
  const handleBookMototaxi = async () => {
    const grabAppUrl =
      "https://play.google.com/store/apps/details?id=com.grabtaxi.android"; // Replace with the appropriate URL scheme for the Grab app

    try {
      const supported = await Linking.canOpenURL(grabAppUrl);
      if (supported) {
        await Linking.openURL(grabAppUrl);
      } else {
        alert("Grab app is not installed or not supported.");
      }
    } catch (error) {
      alert("Unable to open the Grab app.");
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          Available Transpo in {"\n"} Susano Road
        </Text>
        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={24} color="#003366" />
        </TouchableOpacity>
      </View>

      {/* Search Bar Component */}
      <AlerSearchBar />

      {/* Jeepney Loading Section */}
      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <Text style={styles.insideText}>Jeepneys</Text>
        <View style={styles.insideContainer}>
          <Text style={styles.header}>Beside Jule's Bakeshop - Anytime</Text>
          {todas.map((toda, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.itemText}>{toda}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* Tricycle Loading Section */}
      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <Text style={styles.insideText}>Tricycle</Text>
        <View style={styles.insideContainer}>
          <Text style={styles.header}>Beside Jule's Bakeshop - Anytime</Text>
          {tricyle_todas.map((toda, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.itemText}>{toda}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* Book a Mototaxi Button */}
      <TouchableOpacity
        onPress={handleBookMototaxi}
        style={styles.bookButtonWrapper}
      >
        <LinearGradient
          colors={["#5e90b1", "#151d49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bookButton}
        >
          <Text style={styles.bookButtonText}>BOOK A MOTOTAXI NOW!</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  topText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#003366",
  },
  backButton: {
    padding: 5,
  },
  container: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
  },
  insideText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  insideContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  header: {
    fontWeight: "bold",
    color: "#5e90b1",
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    color: "#5e90b1",
    paddingLeft: 15,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
  },
  bookButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  bookButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
