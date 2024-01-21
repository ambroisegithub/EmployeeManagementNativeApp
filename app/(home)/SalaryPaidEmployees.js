import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  Alert,
  Button,
} from "react-native";
import axios from "axios";

const SalaryPaidEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://nativeemployeeapp.onrender.com/employees/paid"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching paid employees:", error);
      Alert.alert("Error", "Failed to fetch paid employees.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (employeeId) => {
      try {
        await axios.delete(
          `https://nativeemployeeapp.onrender.com/deleteEmployee/${employeeId}`
        );
        // Refresh the employee list after deletion
        fetchData();
      } catch (error) {
        console.error("Error deleting employee:", error);
        Alert.alert("Error", "Failed to delete employee.");
      }
    },
    [fetchData]
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={employees}
          renderItem={({ item }) => (
            <View style={styles.employeeItem}>
              <Text style={styles.employeeName}>
                Employee Id: {item.employeeId}
              </Text>
              <Text style={styles.employeeName}>
                Names: {item.employeeName}
              </Text>
              <Text style={styles.employeeName}>
                Designation: {item.designation}
              </Text>
              <Text style={styles.employeeName}>Salary: {item.salary}</Text>
              <Text style={styles.employeeName}>Status: {item.status}</Text>
              <Text style={styles.employeeName}>
                Phone Number: {item.phoneNumber}
              </Text>
              <Button
                title="Delete"
                onPress={() => handleDelete(item.employeeId)}
              />
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  employeeItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  employeeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  employeeDetails: {
    fontSize: 16,
    color: "#666",
  },
  deleteButton: {
    color: "#f00",
  },
});

export default SalaryPaidEmployees;
