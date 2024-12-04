import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { Marker } from "react-native-maps";
import { selectedMarker as SelectedMarkerContext } from "../Context/selectedMarker"; // Correctly import and rename for clarity

const Markers = ({ index, place }) => {
  return (
    <Marker
      coordinate={{
        latitude: place.location?.latitude,
        longitude: place.location?.longitude,
      }}
    >
      <Image
        source={require("../../assets/images/location.png")}
        style={{ width: 30, height: 30, resizeMode: "contain" }}
      />
    </Marker>
  );
};

export default Markers;

const styles = StyleSheet.create({});
