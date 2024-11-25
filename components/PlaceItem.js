import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import GlobalApi from "../app/utils/GlobalApi";

const PlaceItem = memo(({ place }) => {
  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";
  const [loading, setLoading] = useState(true);

  return (
    <View
      style={{
        margin: 5,
        width: Dimensions.get("screen").width * 0.9,
        backgroundColor: "#fff",
        borderRadius: 10,
      }}
    >
      <View style={{ position: "relative", height: 130 }}>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#696969"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
            }}
          />
        )}
        <Image
          source={
            place?.photos && place?.photos[0]?.name
              ? {
                  uri:
                    PLACE_PHOTO_BASE_URL +
                    place?.photos[0]?.name +
                    "/media?key=" +
                    GlobalApi?.API_KEY +
                    "&maxHeightPx=800&maxWidthPx=1200",
                }
              : require("../assets/images/buslogo.png")
          }
          style={{ width: "100%", height: 130, borderRadius: 10 }}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-meduim" }}>
          {place?.displayName?.text || "Unknown Place"}
        </Text>
        <Text style={{ color: "#696969" }}>
          {place?.shortFormattedAddress || "No Address Available"}
        </Text>
      </View>
    </View>
  );
});

export default PlaceItem;
