import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import crashImage from "../../assets/images/crash1.png"; // Import the local image
import { Ionicons } from "react-native-vector-icons"; // Import Ionicons for icons
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

const InformationScreen = () => {
  const [location, setLocation] = useState("");
  const [liked, setLiked] = useState(false); // Track whether the post is liked
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername) {
          setUsername(storedUsername);
        }

        // Add hardcoded comments
        setComments([
          { id: "1", username: "Althea Joy", text: "Gagi Real Ba ? " },

          {
            id: "2",
            username: "user32412",
            text: "oo madam, mag move it ka nalang",
          },
          { id: "3", username: "Lorene Mae", text: "Thanks for the update." },
          {
            id: "4",
            username: "Denisse Marie",
            text: "Late na namn ako nito hays",
          },
        ]);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { id: Date.now().toString(), username, text: comment },
      ]);
      setComment("");
    }
  };

  const CommentModal = () => {
    setModalVisible(false); // Close modal if needed
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("selectedLocation");
        if (savedLocation) {
          setLocation(savedLocation);
        }
      } catch (error) {
        console.error("Error fetching location from local storage:", error);
      }
    };

    fetchLocation();
  }, []);

  const handleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  const openCommentModal = () => {
    setModalVisible(true); // Open comment modal
  };

  const closeCommentModal = () => {
    setModalVisible(false); // Close comment modal
  };

  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen (home)
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercont}>
        <Text style={styles.title}>Road Alert</Text>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>{location}</Text>
      </View>
      <LinearGradient
        colors={["#5e90b1", "#151d49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.informationContainer}
      >
        <Text style={styles.username}>User32131 - 2 mins ago</Text>
        <Image source={crashImage} style={styles.userImage} />

        <Text style={styles.caption}>
          May motor na banga ng close van tang ina naman!!!
        </Text>

        <View style={styles.iconContainer}>
          {/* Like Button */}
          <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"} // Change icon based on like status
              size={24}
              color={liked ? "red" : "white"} // Turn red when liked
            />
          </TouchableOpacity>

          {/* Comment Button */}
          <TouchableOpacity
            onPress={openCommentModal}
            style={styles.iconButton}
          >
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="white" // Comment icon color
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* Modal for Comments */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeCommentModal}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <BlurView intensity={90} tint="dark" style={styles.modalOverlay}>
            <View style={styles.overlayColor}>
              <LinearGradient
                colors={["#5e90b1", "#151d49"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalContainer}
              >
                <Text style={styles.modalTitle}>Comments</Text>

                {/* Use FlatList for rendering comments */}
                <FlatList
                  data={comments}
                  style={styles.flatlist}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.commentItem}>
                      <View style={styles.avatarContainer}>
                        <Image
                          source={require("../../assets/images/user1.png")} // Replace with your local image path
                          style={styles.avatar}
                        />
                        <Text style={styles.commentName}>{item.userame}</Text>
                      </View>

                      <Text style={styles.commentText}>{item.text}</Text>
                    </View>
                  )}
                  contentContainerStyle={styles.scrollViewContent}
                />

                {/* Comment input */}
                <TextInput
                  style={styles.input}
                  placeholder="Add a comment..."
                  placeholderTextColor="#000"
                  value={comment}
                  onChangeText={setComment}
                  onSubmitEditing={handleAddComment}
                />
                <TouchableOpacity
                  onPress={handleAddComment}
                  style={styles.sendButton}
                >
                  <Ionicons name="send" size={20} color="#003366" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headercont: {
    flexDirection: "row",
  },
  header: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    color: "#003366",
  },
  text: {
    fontSize: 18,
    color: "#003366",
  },
  informationContainer: {
    padding: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  username: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 10,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 300,
    marginTop: 10,
  },
  userImage: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10, // Space between the image and text
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  iconButton: {
    marginRight: 20, // Space between the icons
  },
  backButton: {
    position: "absolute",
    right: 1,
    top: 25,
    color: "#003366",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .8)", // Optional semi-transparent background
  },
  input: {
    color: "#000",
    backgroundColor: "rgba(255, 255, 255, .5)",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: "90%",
  },
  commentName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 10,
    color: "#fff",
  },
  sendButton: {
    position: "absolute",
    right: 30, // Adjust this for spacing from the right edge
    top: "100%",
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
  commentSection: {
    marginBottom: 20,
  },
  commentText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
    backgroundColor: "#fff",
    width: "70%",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  closeModalButton: {
    backgroundColor: "#003366",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeModalText: {
    color: "#fff",
    fontSize: 16,
  },
  flatlist: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
  },
  scrollView: {
    flex: 1, // Allow ScrollView to take the available height
  },

  scrollViewContent: {
    paddingBottom: 20, // Add some space at the bottom of the list to make it easier to scroll
  },

  avatarContainer: {
    marginRight: 10,
    flexDirection: "row", // Space between the image and username
  },
  avatar: {
    width: 30, // Adjust size of the avatar
    height: 30, // Adjust size of the avatar
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
  },
});
