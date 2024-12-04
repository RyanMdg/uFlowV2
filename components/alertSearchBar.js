import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const suggestionsData = ["Quirino Highway", "Susano Road", "Mindanao Ave"];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    if (text) {
      const filtered = suggestionsData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionPress = async (item) => {
    try {
      await AsyncStorage.setItem("selectedLocation", item);
    } catch (error) {
      console.error("Error saving location to local storage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Where are we going today?"
        placeholderTextColor="#888"
        value={query}
        onChangeText={handleSearch}
      />
      {filteredSuggestions.length > 0 && (
        <FlatList
          data={filteredSuggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Link
              style={styles.suggestionItem}
              href={`/screens/InformationScreen`}
              onPress={() => handleSuggestionPress(item)}
            >
              {item}
            </Link>
          )}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    height: 50,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    color: "#000",
    borderWidth: 2,
    borderColor: "#003366",
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#003366",
    textDecorationLine: "none",
  },
});
