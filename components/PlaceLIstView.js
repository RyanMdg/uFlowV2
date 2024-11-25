import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceListView = ({ placeList }) => {
  console.log("***", placeList);
  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PlaceItem place={item} />}
        // Use a unique identifier from your data
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        ListEmptyComponent={<Text>No places available</Text>} // Placeholder if the list is empty
      />
    </View>
  );
};

export default PlaceListView;

const styles = StyleSheet.create({});
