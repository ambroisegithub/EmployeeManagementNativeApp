import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

const PartTimeEmployeeList = () => {
  const [partTimeEmployees, setPartTimeEmployees] = useState([]);

  useEffect(() => {
    const fetchPartTimeEmployees = async () => {
      try {
        const response = await axios.get("https://nativeemployeeapp.onrender.com/employees/parttime");
        setPartTimeEmployees(response.data);
      } catch (error) {
        console.error("Error fetching part-time employees:", error);
      }
    };

    fetchPartTimeEmployees();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Part-Time Employee List</Text>
      <FlatList
        data={partTimeEmployees}
        keyExtractor={(item) => item.employeeId}
        renderItem={({ item }) => (
          <View style={styles.employeeItem}>
            <Text>{`ID: ${item.employeeId}`}</Text>
            <Text>{`Name: ${item.employeeName}`}</Text>
            <Text>{`Phone Number: ${item.phoneNumber}`}</Text>
            <Text>{`Type: ${item.type}`}</Text>
            <Text>{`Status: ${item.status}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  employeeItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default PartTimeEmployeeList;
