import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Header from "./Header";
import ListItem from "./ListItem";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      text: "do a task",
      completed: false,
    },
  ]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = {
          text: task,
          completed: updatedTasks[editIndex].completed,
        };
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, { text: task, completed: false }]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.text);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    if (task) {
      setTask("");
      setEditIndex(-1);
    }
  };

  const toggleCompleted = (itemIndex) => {
    setTasks(
      tasks.map((item, index) =>
        index === itemIndex ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Pressable style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? "Update Task" : "Add Task"}
          </Text>
        </Pressable>
        <DraggableFlatList
          data={tasks}
          onDragEnd={({ data }) => setTasks(data)}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, drag, getIndex }) => (
            <ListItem
              el={item}
              index={getIndex()}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
              toggleCompleted={toggleCompleted}
              drag={drag}
            />
          )}
          containerStyle={{ flex: 1 }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default TodoList;
