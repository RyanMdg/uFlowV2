import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Styles from "../styles/loginStyles";
import { Ionicons } from "react-native-vector-icons"; // Import Ionicons for the eye icon
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("Male"); // Default gender selection
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("fullName", fullName);
      await AsyncStorage.setItem("gender", gender); // Save gender in AsyncStorage

      Alert.alert("Success", "You are registered!");
      router.push("/");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
      Alert.alert("Error", "There was an issue saving your data.");
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
        <Text style={Styles.tagLine}>Navigate Smarter, Arrive Quicker </Text>
      </View>

      <View style={Styles.formContainer}>
        <TextInput
          style={Styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={Styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={Styles.eyeIconContainer}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={Styles.eyeIconContainer}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Gender Selection */}
        <View style={Styles.genderContainer}>
          <Text style={Styles.genderLabel}>Gender:</Text>
          <View style={Styles.genderOptions}>
            <RadioButton
              value="Male"
              status={gender === "Male" ? "checked" : "unchecked"}
              onPress={() => setGender("Male")}
            />
            <Text style={Styles.genderText}>Male</Text>
            <RadioButton
              value="Female"
              status={gender === "Female" ? "checked" : "unchecked"}
              onPress={() => setGender("Female")}
            />
            <Text style={Styles.genderText}>Female</Text>
          </View>
        </View>

        <TouchableOpacity style={Styles.Login} onPress={handleSignup}>
          <LinearGradient
            colors={["#5e90b1", "#151d49"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[Styles.absoluteFill, { borderRadius: 25 }]}
          >
            <Text style={Styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("./Login")}
          style={Styles.signupTextContainer}
        >
          <Text style={Styles.signupText}>
            Already have an account?{" "}
            <Text style={Styles.signupLink}>Log in here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SignUp;
