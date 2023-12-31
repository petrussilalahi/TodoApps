/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text,View,TextInput,TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import styles from './AddTaskModal.style';

const AddTaskModal = ({isVisible,onClose,onAddTask,isUpdated})=>{
    const [taskInputValue,setTaskInputValue]=useState('');
    function handleAddTask(){
        if(taskInputValue){
            onAddTask(taskInputValue);
        }
        setTaskInputValue('');
    }
    return(
        <Modal isVisible={isVisible} style={styles.modalContainer} onBackdropPress={onClose}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{`${isUpdated ? 'Update' : 'Add'} a task to your list`}</Text>
                <TextInput style={styles.input} placeholder='Task...' placeholderTextColor='white' multiline={true} onChangeText={(t)=>setTaskInputValue(t)} value={taskInputValue}></TextInput>
                <TouchableWithoutFeedback onPress={handleAddTask}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonPlaceHolder}>{`${isUpdated ? 'Update' : 'Add'} the task`}</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}
export default AddTaskModal;