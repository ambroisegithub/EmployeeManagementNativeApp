import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://nativeemployeeapp.onrender.com/loginAdmin",
        { username, password }
      );

      if (response.status === 200) {
        Alert.alert("Login Successful", "You are now logged in as an admin", [
          {
            text: "OK",
            onPress: () => router.push("/(home)"), // Redirect to the main index screen after successful login
          },
        ]);
      }
    } catch (error) {
      console.log("error logging in admin", error);
      Alert.alert(
        "Login Failed",
        "Incorrect username or password. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 360,
          height: 500,
          borderRadius: 25,
          backgroundColor: "darkblue",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text style={styles.title}>Employee Management System</Text>
        <Text style={styles.subtitle}>Admin Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#0056b3" : "black",
            },
          ]}
          onPress={handleLogin}
          onPressIn={() => setButtonPressed(true)}
          onPressOut={() => setButtonPressed(false)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Light background color
    paddingRight: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white", // Darker text color
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "white", // Slightly darker text color
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
    width: 300,
    backgroundColor: "#fff", // White background for input
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    padding: 14,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdminLogin;
