import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import TaskCard from '../../components/TaskCard';

export default function Completed() {
  const completedData = useSelector(state =>
    state.todos.filter(todo => todo.isCompleted),
  );
  const dispatch = useDispatch();

  function removeTask(item) {
    dispatch({type: 'REMOVE_TODO', payload: item.id});
  }

  const renderToDoList = ({item}) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onDeleted={() => removeTask(item)}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed</Text>
      <FlatList data={completedData} renderItem={renderToDoList} />
    </View>
  );
}
