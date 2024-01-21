import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import axios from "axios";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([]);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    employeeId: "",
    month: "",
    year: "",
    amount: "",
    paymentDate: "",
    status: "",
  });

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://nativeemployeeapp.onrender.com/employees/pending"
      );
      setEmployees(response.data);
    } catch (error) {
      console.log("Error fetching pending employee data", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handlePayButtonPress = (employee) => {
    if (employee.status === "paid") {
      Alert.alert(
        "Salary Already Paid",
        "This employee's salary has already been paid."
      );
    } else {
      setIsPaymentModalVisible(true);
      setPaymentDetails({
        employeeId: employee.employeeId,
        month: "",
        year: "",
        amount: `${employee.salary}`,
        paymentDate: "",
        status: "paid",
      });
    }
  };

  const handlePaymentConfirmation = async () => {
    try {
      const response = await axios.post(
        "https://nativeemployeeapp.onrender.com/salaryPayment",
        paymentDetails
      );
      Alert.alert("Success", response.data.message);
      setIsPaymentModalVisible(false);
      fetchEmployees();
    } catch (error) {
      console.error("Error confirming payment", error);
      Alert.alert("Failed to confirm payment", error.message);
    }
  };
  return (
    <View style={styles.container}>
      {/* Display Employee Data */}
      {employees.map((employee) => (
        <View key={employee.employeeId} style={styles.container2}>
          <Text>{employee.employeeName}</Text>
          <Text>Salary: ${employee.salary}</Text>
          <Text>Status: {employee.status}</Text>
          <Button
            title="Pay Salary"
            onPress={() => handlePayButtonPress(employee)}
          />
        </View>
      ))}

      {/* Salary Payment Modal */}
      <Modal
        visible={isPaymentModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsPaymentModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Salary Payment</Text>
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              value={paymentDetails.employeeId}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, employeeId: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Month"
              value={paymentDetails.month}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, month: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Year"
              value={paymentDetails.year}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, year: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={paymentDetails.amount}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, amount: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Payment Date"
              value={paymentDetails.paymentDate}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, paymentDate: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Status"
              value={paymentDetails.status}
              onChangeText={(text) =>
                setPaymentDetails({ ...paymentDetails, status: text })
              }
            />
            <Button
              title="Confirm Payment"
              onPress={handlePaymentConfirmation}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 10,
  },
  container2: {
    color: "white",
    backgroundColor: "white",
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    height: "auto",
  },
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

export default EmployeeSalary;
