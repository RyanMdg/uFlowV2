import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/alertSearchBar";

const alerts = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Road Alerts</Text>
      </View>

      <SearchBar />

      <Text style={styles.header2}>Know the routes you may want to avoid</Text>
    </View>
  );
};

export default alerts;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#003366",
    fontWeight: 500,
  },
  header2: {
    fontSize: 18,
    color: "#003366",
    marginTop: 20,
    fontWeight: 400,
    marginBottom: 10,
    paddingLeft: 20,
  },
});
