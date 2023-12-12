import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './TaskCard.style';
import {fnSliceWording} from '../../helper/fnSliceWording';
import {SimpleAnimation} from 'react-native-simple-animations';

const TaskCard = ({
  isCompleted,
  item,
  onCompleted,
  onUpdate,
  onDeleted,
  animated,
}) => {
  return isCompleted ? (
    <SimpleAnimation delay={500} duration={1000} fade staticType={animated}>
      <TouchableWithoutFeedback onLongPress={onCompleted}>
        <View style={styles.completedContainer}>
          <Text style={styles.completedTaskText}>
            {fnSliceWording(item.task, 30)}
          </Text>
          <TouchableOpacity style={styles.buttonAction} onPress={onDeleted}>
            <Icon name="delete" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SimpleAnimation>
  ) : (
    <SimpleAnimation delay={500} duration={1000} fade staticType={animated}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.taskText}>{fnSliceWording(item.task, 25)}</Text>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.buttonAction} onPress={onCompleted}>
              <Icon name="done" size={25} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAction} onPress={onUpdate}>
              <Icon name="edit" size={25} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAction} onPress={onDeleted}>
              <Icon name="delete" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SimpleAnimation>
  );
};
export default TaskCard;
