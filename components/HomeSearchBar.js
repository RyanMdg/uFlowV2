import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    setQuery(text);
    if (onSearch) {
      onSearch(text);
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
    border: 10,
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    color: "#000",
    borderWidth: 2, // Adding border width
    borderColor: "#003366",
  },
});
