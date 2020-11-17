import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, onDelete, id }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onDelete(id);
      }}
      activeOpacity={0.6}
    >
      <View style={styles.listItem}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default GoalItem;
