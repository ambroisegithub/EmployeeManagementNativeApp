import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
// import { Ionicons } from '@expo/vector-icons';
{
  /* <Ionicons name="people-circle" size={24} color="black" /> */
}
const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["darkblue", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 27,
                fontWeight: "900",

                margin: 20,
              }}
            >
              EMPS
            </Text>
            <Text
              style={{
                fontSize: 23,
                color: "white",
                fontWeight: "900",

                margin: 5,
              }}
            >
              Employee Managament System
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                gap: 10,
                flexDirection: "row",
                flexWrap: "nowrap",
                width: 370,
                height: 100,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                All Registered Employee
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: 10,
                width: 370,
                height: 100,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="bookmark" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Record Employee Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/employeeSalary")}
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Paying Salary To Employee
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/summary")}
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Attendence Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/(home)/SalaryPaidEmployees")}
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name="report-problem" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                All Monthly Paid Salary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/FullTimeListEmployee")}
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  // backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Full Time Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              // display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/overtimeemployeelist")}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 6,
                  padding: 12,
                  alignItems: "center",

                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 7,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 140,
                  }}
                >
                  <Ionicons name="time" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 7 }}>Over time Employees</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => router.push("/(home)/workflow")}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 6,
                  padding: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: 195,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 7,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Octicons name="workflow" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 7 }}> Workflow level</Text>
              </View>
            </Pressable>
          </View>

          <Pressable
            onPress={() => router.push("./(home)/parttimeemployeelist")}
          >
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 6,
                  padding: 12,
                  alignItems: "center",

                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 7,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="partly-sunny" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 7 }}>PartTime Employee</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => "./(home)/Performance"}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="carryout" size={24} color="black" />
              </View>

              <Text style={{ marginTop: 7 }}>Employee Performance</Text>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
