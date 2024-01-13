import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Button,
  Alert,
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
  const [updateEmployee, setUpdateEmployee] = useState({});

  const router = useRouter();

  useEffect(() => {
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
    fetchEmployeeData();
  }, []);

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await axios.delete(
        `https://nativeemployeeapp.onrender.com/deleteEmployee/${id}`
      );
      console.log(response.data.message);
      // Fetch employee data again to update the list
      fetchEmployeeData();
    } catch (error) {
      console.log("ErrorError deleting employee", error);
    }
  };

  const handleUpdateEmployee = (employee) => {
    setUpdateEmployee(employee);
    setUpdateModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      // Implement the logic to update the employee details
      // You can make a PUT request to the updateEmployee endpoint
      const response = await axios.put(
        `https://nativeemployeeapp.onrender.com/updateEmployee/${updateEmployee.employeeId}`,
        updateEmployee
      );
      console.log(response.data.message);
      // Close the update modal
      setUpdateModalVisible(false);
      // Fetch employee data again to update the list
      fetchEmployeeData();
    } catch (error) {
      console.log("Error updating employee", error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            alignItems: "center",
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
              placeholder="Enteremployee designation"
            />
            <TextInput
              value={updateEmployee.salary}
              onChangeText={(text) =>
                setUpdateEmployee({ ...updateEmployee, salary: text })
              }
              style={styles.input}
              placeholder="Enter employee salary"
              keyboardType="numeric"
            />
            <Button title="Update" onPress={handleUpdate} />
            <Button
              title="Cancel"
              onPress={() => setUpdateModalVisible(false)}
            />
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
});

export default Employees;
