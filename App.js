import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { FlatList } from "react-native-gesture-handler";


export default function App() {
  const listas1 = ["Redes", "POO", "Redes 2", "Redes 3", "AWS"];
  const listas2 = ["Calculo", "Contabilidad", "React", "Angular", "CSS"];
  let mostrar = 0;
  let encab = false
  let lista= ""
  const Materias = (props) => {
    return (
      <View>
        <Text style={styles.materias}>
          {props.nombre}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>{"Ingresa el numero de la lista de las materias"}</Text>
    <TextInput
        style={styles.disenhoCaja}
        onChangeText={(newText) => (mostrar = newText)}
        placeholder={"Mostrar lista"}
      />
      <Button
        onPress={() => {
          enca = !encab
          if (mostrar==1) {
            lista =<FlatList
            style={styles.scroll}
            data={listas1}
            renderItem={({ item }) => (
              <Materias nombre={item.key} />
            )}
          />
          } else if(mostrar==2) {
            lista= <FlatList
            style={styles.scroll}
            data={listas2}
            renderItem={({ item }) => (
              <Materias nombre={item.key} />
            )}
          />
          }
        }}
        title={"Revisar materia"}
      />
      {encab?<Text style={styles.titulo}>{"Lista Materias"}</Text>:<Text >{""}</Text>}
      {lista }
      <StatusBar style="auto" />
    </View>
  );
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
