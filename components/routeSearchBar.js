import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Link } from "expo-router"; // Import Link for navigation

const Routes = () => {
  const [searchText, setSearchText] = useState(""); // State for the search text
  const [showSuggestions, setShowSuggestions] = useState(false); // State to toggle suggestion visibility

  const suggestions = ["Susano Road", "San Jose", "Santolan", "Sampaloc"]; // List of suggestions

  // Function to filter suggestions based on input
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const handleTextInput = (text) => {
    setSearchText(text);
    setShowSuggestions(text.length > 0); // Show suggestions only if there's input
  };

  return (
    <View>
      <View style={styles.header}>
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
              <Link
                href={
                  item === "Susano Road"
                    ? "/screens/SusanoRoadScreen"
                    : `/other/${item}`
                } // Dynamically set the link
                style={styles.suggestion}
              >
                {item}
              </Link>
            )}
            style={styles.suggestionList}
          />
        )}
      </View>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  header: {
    margin: 15,
  },
  headerFont: {
    color: "#151d49",
    fontSize: 24,
  },
  searchBar: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#151d49",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  suggestionList: {
    maxHeight: 100,
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
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
