import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

const routes = () => {
  const [searchText, setSearchText] = useState(""); // State for the search text
  const [selectedLocation, setSelectedLocation] = useState(""); // State for the selected location
  const [showSuggestions, setShowSuggestions] = useState(false); // State to toggle suggestion visibility

  const suggestions = ["Susano Road", "San Jose", "Santolan", "Sampaloc"]; // List of suggestions

  // Function to filter suggestions based on input
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const handleSelect = (location) => {
    setSearchText(location);
    setSelectedLocation(location);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const handleTextInput = (text) => {
    setSearchText(text);
    setShowSuggestions(text.length > 0); // Show suggestions only if there's input
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerFont}>Want to Commute?</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search your destination..."
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={handleTextInput} // Update the search text state and toggle suggestions
        />

        {/* Suggestions List */}
        {showSuggestions && (
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text style={styles.suggestion}>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.suggestionList}
          />
        )}

        <LinearGradient
          colors={["#5e90b1", "#151d49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container}
        >
          <View>
            <Text style={styles.resultTitle}>Jeepneys</Text>
            <View style={styles.insideContainer}>
              <Text style={styles.resultText}>
                {selectedLocation
                  ? `${selectedLocation} Jeepney Terminal`
                  : "Searching . . ."}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default routes;

const styles = StyleSheet.create({
  header: {
    margin: 20,
  },
  headerFont: {
    color: "#151d49",
    fontSize: 24,
  },
  searchBar: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#151d49",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  suggestionList: {
    maxHeight: 100, // Limit the height of the suggestion list
    backgroundColor: "#fff",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  container: {
    marginTop: 10,
    borderRadius: 30,
    height: "50%",
    padding: 20,
  },
  insideContainer: {
    backgroundColor: "#fff",
    margin: 20,
    height: "65%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    color: "#000",
  },
});
