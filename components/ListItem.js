import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CheckBox from "expo-checkbox";
import EditIcon from "../assets/icons/edit";
import DeleteIcon from "../assets/icons/delete";

const ListItem = ({
  el,
  index,
  handleDeleteTask,
  handleEditTask,
  toggleCompleted,
  drag
}) => (
  <Pressable onLongPress={drag}>
    <View style={styles.task}>
      <View style={styles.taskTextContainer}>
        <Text style={[styles.itemList, el.completed && styles.completed]}>
          {el.text}
        </Text>
      </View>
      <View style={styles.taskButtons}>
        <CheckBox
          style={styles.completeCheckbox}
          value={el.completed}
          onValueChange={() => toggleCompleted(index)}
        />
        <Pressable
          style={styles.editButton}
          onPress={() => handleEditTask(index)}
        >
          <EditIcon />
        </Pressable>
        <Pressable onPress={() => handleDeleteTask(index)}>
          <DeleteIcon />
        </Pressable>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    width: "100%"
  },
  taskTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1
  },
  itemList: {
    fontSize: 24,
    width: "100%"
  },
  taskButtons: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10
  },
  editButton: {
    marginLeft: 7,
    marginRight: 7
  },
  completeCheckbox: {
    width: 25,
    height: 25
  },
  completed: {
    textDecorationLine: "line-through"
  }
});

export default ListItem;
