//Category.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = ({ title }) => (
  <View style={styles.category}>
    <Text style={styles.categoryText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default Category;
