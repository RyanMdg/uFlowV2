import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons"; // For heart icon
import SearchBar from "../../components/HomeSearchBar";
import { LinearGradient } from "expo-linear-gradient";

// Add coordinates for each place
const places = [
  {
    id: "1",
    name: "STI College Novaliches",
    image: require("../../assets/images/sti-college.png"),
    Latitude: 14.7369,
    Longitude: 121.0482,
  },
  {
    id: "2",
    name: "SM City Novaliches",
    image: require("../../assets/images/sm-novaliches.png"),
    Latitude: 14.735,
    Longitude: 121.061,
  },
  {
    id: "3",
    name: "Hotel Sogo Novaliches",
    image: require("../../assets/images/sogo-novaliches.png"),
    Latitude: 14.7425,
    Longitude: 121.0615,
  },
  {
    id: "4",
    name: "Jollibee North Fairview",
    image: require("../../assets/images/jollibee-fairview.png"),
    Latitude: 14.7323,
    Longitude: 121.049,
  },
  {
    id: "5",
    name: "Quezon Memorial Circle",
    image: {
      uri: "https://images.esquiremag.ph/esquiremagph/images/2023/03/27/Quezon-Memorial-Circle-ESQUIRE-MAIN.png",
    },
    Latitude: 14.6514,
    Longitude: 121.0592, // Image URL
  },
  {
    id: "6",
    name: "SM North Edsa",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2BbaPnVqnST5K-dVPJB6_YKQDB0aiyGJjLMwnomqKJ0W8EqikwSRC6K0ODJmS6g4JUM&usqp=CAU",
    },
    Latitude: 14.6549,
    Longitude: 121.0291, // Image URL
  },
  {
    id: "7",
    name: "Trinoma Mall",
    image: {
      uri: "https://www.dccd.com/wp-content/uploads/2017/10/2-trinoma.jpg",
    },
    Latitude: 14.6556,
    Longitude: 121.023, // Image URL
  },
  {
    id: "8",
    name: "Ateneo de Manila University",
    image: {
      uri: "https://www.latrobe.edu.au/students/opportunities/exchange/partners/images/asia/The-Ateneo-de-Manila-University.jpg/1680.jpg",
    },
    Latitude: 14.6131,
    Longitude: 121.0707, // Image URL
  },
  {
    id: "9",
    name: "University of the Philippines Diliman",
    image: {
      uri: "https://i0.wp.com/up.edu.ph/wp-content/uploads/2023/11/Oblation-Plaza-by-Misael-Bacani_4.jpg?resize=640%2C320&ssl=1",
    },
    Latitude: 14.6549,
    Longitude: 121.06, // Image URL
  },
  {
    id: "10",
    name: "Robinsons Place Novaliches",
    image: {
      uri: "https://i.ytimg.com/vi/M0We4nAHq9Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAGmwJ34uilPCTQrlChFMNcZ93ZA",
    },
    Latitude: 14.7413,
    Longitude: 121.0534, // Image URL
  },
  {
    id: "11",
    name: "Landmark Trinoma",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vxFjU8xZha1aKnh6Y2q5wpxh7NUoJ48tZA&s",
    },
    Latitude: 14.6553,
    Longitude: 121.0237, // Image URL
  },
  {
    id: "12",
    name: "Fisher Mall",
    image: { uri: "https://i.ytimg.com/vi/6tew0dNHQsI/maxresdefault.jpg" },
    Latitude: 14.6422,
    Longitude: 121.0432, // Image URL
  },
  {
    id: "13",
    name: "Ever Gotesco Commonwealth",
    image: {
      uri: "https://i0.wp.com/www.theurbanroamer.com/wp-content/uploads/2021/04/51099048205_21ffdd832a_b1.jpg?fit=1024%2C683&ssl=1",
      Latitude: 14.6951,
      Longitude: 121.103,
    }, // Image URL
  },
  {
    id: "14",
    name: "SM Fairview",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/SM_City_Fairview_main_building%2C_Lagro%2C_Novaliches%2C_Quezon_City.jpg/1200px-SM_City_Fairview_main_building%2C_Lagro%2C_Novaliches%2C_Quezon_City.jpg",
    },
    Latitude: 14.7404,
    Longitude: 121.0573, // Image URL
  },
  {
    id: "15",
    name: "UP Town Center",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpMgWB11AcatFhyWZ_pYLW0gJrKJE-7o3KsgIbkNdPk1JUsbISiyClKhCTORyNOHjgPs&usqp=CAU",
    },
    Latitude: 14.6442,
    Longitude: 121.0667, // Image URL
  },
  {
    id: "16",
    name: "Eastwood City",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eastwood_City_Entrance%2C_Q.C.%2C_May_2023.jpg/1024px-Eastwood_City_Entrance%2C_Q.C.%2C_May_2023.jpg",
    },
    Latitude: 14.6116,
    Longitude: 121.0802, // Image URL
  },
  {
    id: "17",
    name: "Greenhills Shopping Center",
    image: {
      uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/db/f7/bb/greenhill-tiangge.jpg?w=1000&h=-1&s=1",
    },
    Latitude: 14.5894,
    Longitude: 121.0597, // Image URL
  },
];

export default function Home() {
  const [username, setUsername] = useState("");
  const [activeButton, setActiveButton] = useState("Explore");
  const [likedPlaces, setLikedPlaces] = useState([]);

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    fetchUsername();
  }, []);

  const handlePress = (button) => {
    setActiveButton(button);
  };

  const toggleLike = (placeId) => {
    setLikedPlaces((prev) =>
      prev.includes(placeId)
        ? prev.filter((id) => id !== placeId)
        : [...prev, placeId]
    );
  };

  const openGoogleMaps = (latitude, longitude) => {
    // Construct Google Maps URL for navigation
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url); // Open the URL in the browser or Google Maps app
  };

  const renderPlaceCard = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => openGoogleMaps(item.latitude, item.longitude)}
      >
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleLike(item.id)}
      >
        <AntDesign
          name={likedPlaces.includes(item.id) ? "heart" : "hearto"}
          size={24}
          color={likedPlaces.includes(item.id) ? "red" : "black"}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const GradientButton = ({ title, isActive, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {isActive ? (
        <LinearGradient
          colors={["#5e90b1", "#151d49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.activeText}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.inactiveButton, styles.button]}>
          <Text style={styles.inactiveText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome back, {"\n"} {username}!
        </Text>
        <Image
          source={require("../../assets/images/user2.png")}
          style={{ width: 60, height: 60, borderRadius: 99, borderWidth: 2 }}
        />
      </View>

      <SearchBar onSearch={(query) => console.log("Search query:", query)} />

      <View>
        <Text style={styles.recent}>Recent Routes</Text>
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Explore"
          isActive={activeButton === "Explore"}
          onPress={() => handlePress("Explore")}
        />
        <GradientButton
          title="Saved"
          isActive={activeButton === "Saved"}
          onPress={() => handlePress("Saved")}
        />
      </View>

      {activeButton === "Explore" && (
        <FlatList
          data={places}
          renderItem={renderPlaceCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      )}

      {activeButton === "Saved" && (
        <FlatList
          data={places.filter((place) => likedPlaces.includes(place.id))}
          renderItem={renderPlaceCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          horizontal
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  title: { fontSize: 24 },
  recent: {
    fontSize: 18,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "flex-start",
    width: "70%",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  gradientButton: {
    paddingVertical: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: "#fff",
    fontSize: 16,
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: "#5e90b1",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveText: {
    color: "#5e90b1",
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    marginRight: 15,
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 200,
    height: 350,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#003366",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
