import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Background from "../components/Background";

import firebase from 'firebase'
import { FIREBASE_CONFIG } from "../core/config";
import { stringify } from 'qs';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const writeUserData =(userInfo)=> {
  firebase.database().ref('users/').push({
       userInfo
  }).then((data)=>{
      console.log('data ' ,  data)
  }).catch((error)=>{
      console.log('error ' , error)
  })
}


export default class ThirdPage extends Component {
  render() {
    const userReservation = stringify(
      this.props.navigation.state.params.JSON_ListView_Clicked_Item).slice(200).match(/=([^&]*)/g)
 
    return (
      <Background>
      <View>
        <Text>
          Su reserva está en proceso:
        </Text>
        <Text style={styles.TextStyle}>
        {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>  
        <Text style={styles.TextStyle}>
        </Text>       
        <TouchableOpacity 
         onPress={() =>
         {
          writeUserData({userReservation})
          console.log({userReservation})
         }      
        }
        >
        <Text>
          Ir a Página de espera 
        </Text>
        </TouchableOpacity>
      </View>
      </Background>
    );
  }
}
const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
  },
});
