import { enableScreens } from "react-native-screens";
enableScreens();
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SplashScreen from "./splashScreen";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import styles from "./styles/HomeStyles";
import btn from "./styles/ButtonStyle";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the splash screen first, then load the main content
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // Adjust the timeout as needed
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = async () => {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    Alert.alert("Success", "You are registered!");
    setSignupModalVisible(false);
  };

  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    const storedPassword = await AsyncStorage.getItem("password");

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.push("/screens/home"); // Navigate to home screen on successful login
    } else {
      Alert.alert("Error", "Incorrect username or password.");
    }
    setLoginModalVisible(false);
  };

  if (!isReady) {
    return <SplashScreen onFinish={() => setIsReady(true)} />; // Display splash screen initially
  }

  return (
    <LinearGradient
      colors={["#5e90b1", "#151d49"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.top_Container}>
        <Text style={styles.text}>Uflow</Text>
        <Text style={styles.h2}>Navigate smarter, arrive quicker</Text>
      </View>
      <View style={styles.h3Cont}>
        <Text style={styles.h3}>Continue as:</Text>
        <View style={styles.userCont}>
          <Image
            source={require("../assets/images/user1.png")}
            style={styles.imageUser}
          />
          <Link style={styles.user} href={`./(tabs)/home`}>
            Althea Mae Nivera
          </Link>
        </View>
        <View style={styles.userCont}>
          <Image
            source={require("../assets/images/user2.png")}
            style={styles.imageUser}
          />
          <Link style={styles.user} href={`./screens/home`}>
            Princess Marie Calo
          </Link>
        </View>
      </View>

      <View style={btn.btnContainer}>
        <Link href={"./screens/Login"} style={btn.Login}>
          <Text style={btn.buttonText}>Log in</Text>
        </Link>

        <Link href={"./screens/signUp"} style={btn.Login}>
          <Text style={btn.buttonText}>Sign Up</Text>
        </Link>
      </View>
    </LinearGradient>
  );
};

export default App;
