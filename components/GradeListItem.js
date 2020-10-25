import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GradeListItem ({ item }){
  return(
  <View style={styles.item}>
    <Text>{item.name}</Text>
    <Text>{item.grade}</Text>
  </View>
  )
}

export const renderGradeListItem = ({ item }) => (
    //<GradeListItem item={item} />
    <View></View>
  );

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})
