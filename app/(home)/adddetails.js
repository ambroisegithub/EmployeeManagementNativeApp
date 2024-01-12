import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";

const AddDetails = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [activeEmployee, setActiveEmployee] = useState(true);
  const [salary, setSalary] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const addEmployee = async () => {
    try {
      const response = await axios.post(
        "https://nativeemployeeapp.onrender.com/addEmployee",
        {
          employeeId,
          employeeName,
          designation,
          joiningDate,
          dateOfBirth,
          activeEmployee,
          salary,
          phoneNumber,
          address,
        }
      );

      const { message, employee } = response.data;
      console.log(message);
      console.log(employee);
      // Reset the form
      setEmployeeId("");
      setEmployeeName("");
      setDesignation("");
      setJoiningDate("");
      setDateOfBirth("");
      setActiveEmployee(true);
      setSalary("");
      setPhoneNumber("");
      setAddress("");
    } catch (error) {
      console.error("Error adding employee", error);
      Alert.alert("Failed to add an employee");
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Add a New Employee</Text>

        <View style={styles.formField}>
          <Text style={styles.label}>Employee Id</Text>
          <TextInput
            value={employeeId}
            onChangeText={setEmployeeId}
            style={styles.textInput}
            placeholder="Employee Id"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Full Name (First and last Name)</Text>
          <TextInput
            value={employeeName}
            onChangeText={setEmployeeName}
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Designation</Text>
          <TextInput
            value={designation}
            onChangeText={setDesignation}
            style={styles.textInput}
            placeholder="Designation"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={setJoiningDate}
            style={styles.textInput}
            placeholder="Joining Date"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            style={styles.textInput}
            placeholder="Enter Date of Birth"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Active Employee</Text>
            <Text>{activeEmployee ? "True" : "False"}</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={setSalary}
            style={styles.textInput}
            placeholder="Salary"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={styles.textInput}
            placeholder="Address"
            placeholderTextColor="black"
          />
        </View>

        <Pressable style={styles.addButton} onPress={addEmployee}>
          <Text style={styles.buttonText}>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formField: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});

export default AddDetails;
