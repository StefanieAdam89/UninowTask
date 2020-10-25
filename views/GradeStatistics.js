import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function GradeStatistics() {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
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