import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="adddetails" />
      <Stack.Screen name="markattendance" />
      <Stack.Screen name="[user]" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="employeeSalary" />
      <Stack.Screen name="SalaryPaidEmployees" />
      <Stack.Screen name="FullTimeListEmployee" />
      <Stack.Screen name="overtimeemployeelist" />
      <Stack.Screen name="parttimeemployeelist" />
      <Stack.Screen name="workflow" />

      
    </Stack>
  );
}
