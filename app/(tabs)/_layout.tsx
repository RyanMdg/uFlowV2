import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { Image } from "react-native";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 70, // Adjust the height as needed
          borderTopLeftRadius: 20, // Add radius to upper left corner
          borderTopRightRadius: 20, // Add radius to upper right corner
          overflow: "hidden", // Ensure the corners are rounded
          flexDirection: "row", // Align items horizontally
          justifyContent: "space-evenly", // Evenly space the tab items
          alignItems: "flex-start",
          paddingTop: 20,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#5e90b1", "#151d49"]} // Define your gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
        headerShown: false, // Hide the header for each tab screen
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={require("../../assets/images/home.png")} // Path to your image
              style={{
                width: focused ? 40 : 35, // Change size if active
                height: focused ? 40 : 35, // Change size if active
                tintColor: focused ? "red" : "white", // Change color if active
                resizeMode: "contain", // Make sure the image scales properly
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={require("../../assets/images/alert.png")} // Path to your image
              style={{
                width: focused ? 35 : 30, // Change size if active
                height: focused ? 35 : 30, // Change size if active
                tintColor: focused ? "red" : "white", // Change color if active
                resizeMode: "contain", // Make sure the image scales properly
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={require("../../assets/images/map.png")} // Path to your image
              style={{
                width: focused ? 50 : 45, // Change size if active
                height: focused ? 50 : 45, // Change size if active
                tintColor: focused ? "red" : "white", // Change color if active
                resizeMode: "contain", // Make sure the image scales properly
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="routes"
        options={{
          tabBarLabel: "Routes",
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={require("../../assets/images/jeep.png")} // Path to your image
              style={{
                width: focused ? 55 : 50, // Change size if active
                height: focused ? 55 : 50, // Change size if active
                tintColor: focused ? "red" : "white", // Change color if active
                resizeMode: "contain", // Make sure the image scales properly
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
