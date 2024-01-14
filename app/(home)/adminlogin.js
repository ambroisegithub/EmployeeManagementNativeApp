import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      Alert.alert("Login Failed", "Incorrect username or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
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
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    width: 250,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 6,
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default AdminLogin;
