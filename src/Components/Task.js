//Task.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ title }) => (
  <View style={styles.task}>
    <Text style={styles.taskText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskText: {
    fontSize: 18,
  },
});

export default Task;
