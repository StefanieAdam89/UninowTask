import React, { Component } from 'react';
import { StyleSheet, StatusBar, FlatList, Text, View } from 'react-native';
import Constants from 'expo-constants';

import gradesArray from '../data/grades';
import renderGradeListItem from '../components/GradeListItem';

export default function GradeList() {
  return (
    <View style={styles.container}>
        <FlatList
          data={gradesArray}
          renderItem={renderGradeListItem}
          keyExtractor={item => item.id}
        /> 
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
