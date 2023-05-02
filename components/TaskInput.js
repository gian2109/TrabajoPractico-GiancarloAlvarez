import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image, Text } from "react-native";


function TaskInput(props) {
  const [nombreA, ingresarNombre] = useState("");
  const [codigoA, ingresarCodigo] = useState("");
  const [notaA, ingresarNota ]= useState("");
  function taskInputHandler(nombreA,codigoA,notaA) {
    ingresarNombre(nombreA);
    ingresarCodigo(codigoA);
    ingresarNota(notaA);
  }
  function onAddTask() {
    props.onAddTask("Alumno:  "+nombreA+" , Codigo: "+codigoA+" , Nota : "+notaA);
    ingresarNombre("");
    ingresarCodigo("");
    ingresarNota("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/nota.png")}
        />
        <Text></Text>
        <Text></Text>
        <Text>REGISTRE NUEVA NOTA DE ALUMNO</Text>
        <Text></Text>
        <Text></Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre completo del  alumno"
          onChangeText={ingresarNombre}
          value={nombreA}
        />
        <Text></Text>
        <Text></Text>
        <TextInput
          style={styles.textInput}
          placeholder="Codigo de alumno"
          onChangeText={ingresarCodigo}
          value={codigoA}
        />
        <Text></Text>
        <Text></Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nota del curso"
          onChangeText={ingresarNota}
          value={notaA}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Agregar Nota" onPress={onAddTask} color={"darkgreen"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancelar" onPress={props.onCancel} color={"red"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "mediumseagreen"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    color: "white",
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default TaskInput;
