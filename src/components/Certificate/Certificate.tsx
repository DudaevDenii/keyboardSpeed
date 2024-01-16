import React from "react";
import { StyleSheet, Document, Page, View, Text } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#121212",
    padding: "30px",
    color: "#e0e0e0",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  view: {
    padding: "10px",
    backgroundColor: "#202020",
    borderRadius: "15px",
    textAlign: "center",
  },
  h1: {
    fontSize: "24px",
  },
});
interface UserData {
  auth: {
    name: string;
    surname: string;
  };
  level: number;
  procent: number;
}
function Certificate(userData: UserData) {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.view}>
          <Text>Certificate</Text>
        </View>
        <View style={styles.view}>
          <Text>Level {userData.level}</Text>
        </View>
        <View style={styles.view}>
          <Text>
            {userData.auth.name} {userData.auth.surname}
          </Text>
        </View>
        <View style={styles.view}>
          <Text>{userData.procent}%</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Certificate;
