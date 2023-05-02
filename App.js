import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,FlatList,Button,Image,Modal} from 'react-native';
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
const image = {uri: 'https://reactjs.org/logo-og.png'};
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addTaskHandler(enteredTaskText) {
    console.log(modalIsVisible);
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        title: enteredTaskText,
        id: Math.random().toString(),
        enabled: true,
      },
    ]);
    endModalHandler();
  }

  function startModalHandler() {
    setModalIsVisible(true);
  }
  function endModalHandler() {
    setModalIsVisible(false);
  }

  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.text}>BIENVENIDO A LA APLICACION DE REGISTRO DE NOTAS           DE ALUMNOS</Text>
      <Text></Text>
      <Image 
        source={require('./assets/images/portapapeles.png')}
        style={{ width: 200, height: 200, marginTop: 10 }}
      />
      <Text></Text>
      <Text></Text>
      <Button
        title="Registrar Nueva nota de alumno"
        color="darkgreen"
        onPress={startModalHandler}
      />
      <TaskInput
        visible={modalIsVisible}
        onAddTask={addTaskHandler}
        onCancel={endModalHandler}
      />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            return (
              <TaskItem
                id={itemData.item.id}
                text={itemData.item.title}
                enabled={itemData.item.enabled}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text:{
    color: 'red',
  }
});
