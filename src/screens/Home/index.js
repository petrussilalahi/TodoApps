import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, Animated} from 'react-native';
import AddTaskModal from '../../components/AddTaskModal';
import FloatingButton from '../../components/FloatingButton';
import TaskCard from '../../components/TaskCard';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [animationState, setAnimationState] = useState('zoom');

  // useSelector
  const toDoListRedux = useSelector(state =>
    state.todos.filter(todo => !todo.isCompleted),
  );

  // dispatch
  const dispatch = useDispatch();

  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  function addTask(taskContent) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoListRedux.find(
      todo => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (taskContentCheck === '') {
      Alert.alert('Opps...', 'Please enter a valid task.');
    } else {
      if (checkDublicate) {
        Alert.alert('Opps...', 'You have already added this task. ');
      } else if (isUpdate) {
        const newList = toDoListRedux.map(todo => {
          if (todo.id === dataUpdate.id) {
            todo.task = taskContent;
          }
          return todo;
        });
        dispatch({type: 'UPDATE_TODO', payload: newList});
        setIsUpdate(false);
        setModalVisible(false);
      } else {
        const newTask = {
          id: toDoListRedux.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        dispatch({type: 'ADD_TODO', payload: newTask});
        setModalVisible(false);
      }
    }
  }

  function isCompletedTask(task) {
    if (task.isCompleted === false) {
      setAnimationState('bounce');
      const newList = toDoListRedux.map(todo => {
        if (todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      dispatch({type: 'IS_COMPLETED', payload: newList});
      navigation.navigate('Completed');
    } else {
      dispatch({type: 'REMOVE_TODO', payload: task.id});
    }
  }

  function updateTask(item) {
    setIsUpdate(true);
    handleModalVisible();
    setDataUpdate(item);
  }

  function removeTask(item) {
    dispatch({type: 'REMOVE_TODO', payload: item.id});
  }

  const renderToDoList = ({item}) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onCompleted={() => isCompletedTask(item)}
      onUpdate={() => updateTask(item)}
      onDeleted={() => removeTask(item)}
      animated={animationState}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List</Text>
      <FlatList data={toDoListRedux} renderItem={renderToDoList} />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
        isUpdated={isUpdate}
      />
    </View>
  );
};

export default Home;
