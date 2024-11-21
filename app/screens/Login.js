import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import { Ionicons } from "@expo/vector-icons"; // For the eye icon
import Styles from "../styles/loginStyles";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const router = useRouter();

  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    const storedPassword = await AsyncStorage.getItem("password");

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.push("../(tabs)/home");
    } else {
      Alert.alert("Error", "Incorrect username or password.");
    }
  };

  return (
    <LinearGradient
      colors={["#5e90b1", "#151d49"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={Styles.container}
    >
      <View style={Styles.LogoContainer}>
        <View style={Styles.rowLogo}>
          <Text style={Styles.Logo}>UFlow</Text>
        </View>
        <Text style={Styles.tagLine}>Navigate Smarter, Arrived Quicker</Text>
      </View>

      <View style={Styles.formContainer}>
        <TextInput
          style={Styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={inputUsername}
          onChangeText={setInputUsername}
        />
        <View style={Styles.inputContainer}>
          <TextInput
            style={[Styles.input]}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!passwordVisible}
            value={inputPassword}
            onChangeText={setInputPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={Styles.eyeIconContainer}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.Login} onPress={handleLogin}>
          <LinearGradient
            colors={["#5e90b1", "#151d49"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[Styles.absoluteFill, { borderRadius: 25 }]}
          >
            <Text style={Styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("./signUp")}
          style={Styles.signupTextContainer}
        >
          <Text style={Styles.signupText}>
            Don't have an account?{" "}
            <Text style={Styles.signupLink}>Sign up here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;
