import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchResults = ({
  data,
  input,
  handleDeleteEmployee,
  handleUpdateEmployee,
}) => {

  const renderEmployee = ({ item }) => (
    <View style={styles.employee}>
      <Text style={styles.name}>{item.employeeName}</Text>
      <Text style={styles.designation}>{item.designation}</Text>
      <Text style={styles.salary}>Salary: {item.salary}</Text>
      <Text style={styles.name}>{item.joiningDate}</Text>
      <Text style={styles.dateOfBirth}>{item.dateOfBirth}</Text>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      <Text style={styles.address}>{item.address}</Text>

      <View style={styles.icons}>
        <Pressable onPress={() => handleUpdateEmployee(item)}>
          <AntDesign name="edit" size={20} color="blue" />
        </Pressable>
        <Pressable onPress={() => handleDeleteEmployee(item.employeeId)}>
          <AntDesign name="delete" size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data.filter(
        (item) =>
          item.employeeName.toLowerCase().includes(input.toLowerCase()) ||
          item.designation.toLowerCase().includes(input.toLowerCase())
      )}
      keyExtractor={(item) => item.employeeId.toString()}
      renderItem={renderEmployee}
    />
  );
};

const styles = StyleSheet.create({
  employee: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  designation: {
    fontSize: 14,
    color: "gray",
  },
  salary: {
    fontSize: 14,
    color: "gray",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
  },
});

export default SearchResults;
