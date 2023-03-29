import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Listas() {
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  materias: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontStyle: "italic",
    color: "#25306b",
    borderWidth:1,
    borderRadius:10
  },scroll: {
    borderColor: "fffff",
    
    height: 400,
    width: 300,
  },disenhoCaja: {
    margin: 10,
    fontSize: 18,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  },
  titulo:{
    margin: 10,
    fontSize: 22,
    textAlign: "center",
  }
});
