import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Text, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text>Add TODOs</Text>
        <TextInput
          placeholder="Enter title..."
          style={styles.inputContainerInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.btn}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  inputContainerInput: {
    width: '80%',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    padding: 5,
    marginVertical: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  btn: {
    width: '40%',
  },
});
export default GoalInput;
