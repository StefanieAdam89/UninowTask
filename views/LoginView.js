import React, { Component, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

import login from '../utils/functions';

export default function LoginView(){
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
              onClick={login}>
              <Text style={styles.buttonTextStyle}> Login </Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: Constants.statusBarHeight,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-evenly',
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