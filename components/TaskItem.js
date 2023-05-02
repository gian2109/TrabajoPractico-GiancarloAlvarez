import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemText: {
    color: "white",
  },
  itemView: {
    borderColor: "green",
    borderWidth: 1,
    backgroundColor: "mediumseagreen",
    borderRadius: 5,
    padding: 5,
  },
  pressedItem: {
    opacity: 0.7,
  },
});

export default TaskItem;
