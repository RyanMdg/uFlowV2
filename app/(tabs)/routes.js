import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import RouteSearchBar from "../../components/routeSearchBar";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Routes = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen (home)
  };

  return (
    <View>
      {/* Header Section */}
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Want to Commute?</Text>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      </View>

      {/* Search Bar Component */}
      <RouteSearchBar />

      {/* Jeepney Loading Section */}
      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View>
          <Text style={styles.insideText}>Jeepneys</Text>
          <View style={styles.insideContainer}>
            <ActivityIndicator
              size="large"
              color="#000"
              style={{ opacity: 0.2 }}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Tricycle Loading Section */}
      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View>
          <Text style={styles.insideText}>Tricycle</Text>
          <View style={styles.insideContainer}>
            <ActivityIndicator
              size="large"
              color="#000"
              style={{ opacity: 0.2 }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Routes;

// Styles for the screen
const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
  },
  backButton: {
    padding: 5,
  },
  container: {
    marginHorizontal: 20,
    height: "30%",
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
  },
  insideText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  insideContainer: {
    backgroundColor: "#fff",
    height: "80%",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
