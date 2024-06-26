import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Button,
  Alert, // Import Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResults from "../../components/SearchResults";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState({
    employeeId: "",
    employeeName: "",
    designation: "",
    joiningDate: "",
    dateOfBirth: "",
    activeEmployee: false, // Assuming activeEmployee is a boolean
    salary: "",
    phoneNumber: "",
    address: "",
  });

  const router = useRouter();

  // Move fetchEmployeeData outside useEffect
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "https://nativeemployeeapp.onrender.com/employees"
      );
      setEmployees(response.data);
    } catch (error) {
      console.log("error fetching employee data", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []); // Empty dependency array means it will run only once when the component mounts

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await axios.delete(
        `https://nativeemployeeapp.onrender.com/deleteEmployee/${id}`
      );
      console.log(response.data.message);
      fetchEmployeeData();
      Alert.alert("Success", "Employee deleted successfully");
    } catch (error) {
      console.log("Error deleting employee", error);
    }
  };

  const handleUpdateEmployee = (employee) => {
    setUpdateEmployee(employee);
    setUpdateModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://nativeemployeeapp.onrender.com/updateEmployee/${updateEmployee.employeeId}`,
        updateEmployee
      );
      console.log(response.data.message);
      setUpdateModalVisible(false);
      fetchEmployeeData();
      Alert.alert("Success", "Employee updated successfully");
    } catch (error) {
      console.log("Error updating employee", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            // alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 40,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />

          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={30} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>

      {employees.length > 0 ? (
        <SearchResults
          data={employees}
          input={input}
          handleDeleteEmployee={handleDeleteEmployee}
          handleUpdateEmployee={handleUpdateEmployee}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}

      {/* Update Modal */}
      <Modal
        visible={updateModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Employee</Text>
            <TextInput
              value={updateEmployee.employeeName}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, employeeName: text })
              }
              style={styles.input}
              placeholder="Enter employee name"
            />
            <TextInput
              value={updateEmployee.designation}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, designation: text })
              }
              style={styles.input}
              placeholder="Enter employee designation"
            />
            {/* Add the following fields for other data */}
            <TextInput
              value={updateEmployee.joiningDate}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, joiningDate: text })
              }
              style={styles.input}
              placeholder="Enter joining date"
            />
            <TextInput
              value={updateEmployee.dateOfBirth}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, dateOfBirth: text })
              }
              style={styles.input}
              placeholder="Enter date of birth"
            />
            <TextInput
              value={updateEmployee.address}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, address: text })
              }
              style={styles.input}
              placeholder="Address"
            />
            <TextInput
              value={updateEmployee.phoneNumber}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, phoneNumber: text })
              }
              style={styles.input}
              placeholder="phone number"
            />
            <TextInput
              value={updateEmployee.salary.toString()} // Convert to string
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, salary: text })
              }
              style={styles.input}
              placeholder="Enter employee salary"
              keyboardType="numeric"
            />
        <Pressable
        onPress={handleUpdate}
        style={[styles.button, { backgroundColor: "black" }]}
      >
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
      <Pressable
        onPress={() => setUpdateModalVisible(false)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue", // Change the background color as needed
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white", // Change the text color as needed
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Employees;
