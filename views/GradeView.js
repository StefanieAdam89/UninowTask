import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

export default function GradeView() {
  return (
    <View style={styles.container}>
      <Text>Grades</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});
