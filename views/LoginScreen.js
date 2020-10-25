import React, { Component, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default function LoginScreen({ navigation }) {
    const [name, setName] = useState('testname');
    const [password, setPassword] = useState('pwd');

    return (
        <View style={styles.container}>
          <View style={styles.column}>
            <Text>Username:</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(val) => setName(val)}
            />
            <Text>Password:</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(val) => setPassword(val)}
            />
            <TouchableHighlight 
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Grades')}>
              <Text style={styles.buttonTextStyle}> Login </Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
   height: 25, 
   borderColor: 'black', 
   borderWidth: 1,
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  }
});