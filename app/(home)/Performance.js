import React from "react";
import { Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const Performance = () => {
  const screenWidth = Dimensions.get("window").width;

  const data = [
    {
      employeeName: "John Doe",
      performanceScore: 85,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      employeeName: "Jane Smith",
      performanceScore: 92,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      employeeName: "Bob Johnson",
      performanceScore: 78,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      employeeName: "Alice Brown",
      performanceScore: 95,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      employeeName: "Mike Williams",
      performanceScore: 88,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Employee Performance Chart
      </Text>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"performanceScore"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
      />
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        This pie chart represents the distribution of employee performance scores.
      </Text>
    </View>
  );
};

export default Performance;
