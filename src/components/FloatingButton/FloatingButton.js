import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './FloatingButton.style';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default FloatingButton;
