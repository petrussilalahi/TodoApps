import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import AddTaskModal from '../../components/AddTaskModal';
import FloatingButton from '../../components/FloatingButton';
import TaskCard from '../../components/TaskCard';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  function addTask(taskContent) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find(
      todo => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (taskContentCheck === '') {
      Alert.alert('Opps...', 'Please enter a valid task.');
    } else {
      if (checkDublicate) {
        Alert.alert('Opps...', 'You have already added this task. ');
      } else {
        const newTask = {
          id: toDoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setToDoList(oldTasks => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }

  function deleteTask(task) {
    if (task.isCompleted === false) {
      const newList = toDoList.map(todo => {
        if (todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter(item => item.id !== task.id));
    }
  }

  const renderToDoList = ({item}) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onDelete={() => deleteTask(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List</Text>
      <FlatList data={toDoList} renderItem={renderToDoList} />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDarkColor,
    flex: 1,
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25,
  },
});

export default Home;