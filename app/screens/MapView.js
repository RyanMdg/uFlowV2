import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";
import MapViewStyle from "../utils/MapViewStyle.json";
import * as Location from "expo-location";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import GlobalApi from "../utils/GlobalApi";
import PlaceLIstView from "../../components/PlaceLIstView";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [placeList, setPlaceList] = useState([]);

  // Fetch nearby places when the location is available
  useEffect(() => {
    if (location) {
      GetNearByPlace();
    }
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: [
        "train_station",
        "taxi_stand",
        "transit_station",
        "light_rail_station",
        "subway_station",
      ],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
          radius: 5000.0,
        },
      },
    };

    GlobalApi.NewNearByPlace(data)
      .then((resp) => {
        console.log(JSON.stringify(resp.data));
        setPlaceList(resp.data?.places); // Set the place list
      })
      .catch((err) => {
        console.error(
          "Error fetching places:",
          err.response?.data || err.message
        );
      });
  };

  // Get current location
  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005, // Zoomed in
        longitudeDelta: 0.005,
      });
      console.log(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    location?.latitude && (
      <View style={styles.container}>
        {/* Header and Search Bar */}
        <View style={styles.headerContainer}>
          <Header />
          <SearchBar searchLocation={(location) => console.log(location)} />
        </View>

        {/* Map */}
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={region}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          >
            <Image
              source={require("../../assets/images/Marker-Icon.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
          </Marker>
        </MapView>

        {/* Place List View */}
        {placeList.length > 0 && (
          <View style={styles.placeListContainer}>
            <PlaceLIstView placeList={placeList} />
          </View>
        )}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 20, // Ensure it appears above the map

    padding: 10,
  },
});
