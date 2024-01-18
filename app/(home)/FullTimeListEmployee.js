import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";

const FullTimeListEmployee = () => {
  const [fullTimeEmployees, setFullTimeEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [employeeType, setEmployeeType] = useState("");

  useEffect(() => {
    const fetchFullTimeEmployees = async () => {
      try {
        const response = await axios.get(
          "https://nativeemployeeapp.onrender.com/employees/fulltime"
        );
        setFullTimeEmployees(response.data);
      } catch (error) {
        console.log("Error fetching full-time employees", error);
      }
    };

    fetchFullTimeEmployees();
  }, []);

  const updateEmployeeType = async () => {
    try {
      const response = await axios.put(
        `https://nativeemployeeapp.onrender.com/updateEmployeeTo${employeeType}/${selectedEmployee.employeeId}`,
        { type: employeeType }
      );
      const updatedEmployee = response.data.employee;
      const updatedEmployees = fullTimeEmployees.map((employee) =>
        employee.employeeId === updatedEmployee.employeeId
          ? updatedEmployee
          : employee
      );
      setFullTimeEmployees(updatedEmployees);
      setModalVisible(false);

      Alert.alert(
        "Success",
        "Employee type has been updated.",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    } catch (error) {
      console.log(`Error updating employee type to ${employeeType}`, error);
      Alert.alert(
        "Error",
        "Failed to update employee type.",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    }
  };

  const openModal = (employee, type) => {
    setSelectedEmployee(employee);
    setEmployeeType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Time Employees</Text>
      <FlatList
        data={fullTimeEmployees}
        keyExtractor={(item) => item.employeeId}
        renderItem={({ item }) => (
          <View style={styles.employeeContainer}>
            <Text style={styles.employeeName}>{item.employeeName}</Text>
            <Text style={styles.employeeDetail}>
              Employee ID: {item.employeeId}
            </Text>
            <Text style={styles.employeeDetail}>Salary: ${item.salary}</Text>
            <Text style={styles.employeeDetail}>Type: {item.type}</Text>
            <Text style={styles.employeeDetail}>Status: {item.status}</Text>
            <Pressable
              style={styles.updateButton}
              onPress={() => openModal(item, "PartTime")}
            >
              <Text style={styles.updateButtonText}>
                Update Type To Part Time
              </Text>
            </Pressable>

            <Pressable
              style={styles.updateButton}
              onPress={() => openModal(item, "Overtime")}
            >
              <Text style={styles.updateButtonText}>
                Update Type To Over Time
              </Text>
            </Pressable>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Update Employee Type</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Employee Type"
            value={employeeType}
            onChangeText={setEmployeeType}
          />
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Pressable style={styles.modalButton} onPress={updateEmployeeType}>
              <Text style={styles.modalButtonText}>Confirm</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  employeeContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    borderRadius: 8,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  employeeDetail: {
    fontSize: 14,
    marginBottom: 4,
  },
  updateButton: {
    marginTop: 8,
    backgroundColor: "#0080ff",
    padding: 8,
    borderRadius: 4,
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  modalButton: {
    backgroundColor: "#0080ff",
    padding: 8,
    borderRadius: 4,
    flex: 1,
    marginRight: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FullTimeListEmployee;