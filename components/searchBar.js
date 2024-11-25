import React from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { BlurView } from "expo-blur";

const SearchBar = ({ searchLocation }) => {
  return (
    <View style={styles.container}>
      <BlurView intensity={50} style={styles.blurContainer}>
        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.searchInput,
            container: styles.searchContainer,
            listView: styles.suggestionsContainer, // Custom style for suggestions
            row: styles.suggestionRow, // Style for individual suggestion rows
          }}
          placeholder="Search Terminal Station"
          enablePoweredByContainer={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            searchLocation(details?.geometry?.location);
          }}
          query={{
            key: "AIzaSyAdOh7rB23rL5kd2dw30UyFBZrjhpP4l0Q",
            language: "en",
          }}
        />
      </BlurView>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  blurContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  searchContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  searchInput: {
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white
    color: "#000", // Black text
  },
  suggestionsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white
    borderRadius: 10,
    marginTop: 10,
  },
  suggestionRow: {
    backgroundColor: "transparent", // Ensure rows are also transparent
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.2)", // Subtle divider
  },
});
