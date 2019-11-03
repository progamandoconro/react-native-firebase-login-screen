import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Background from "../components/Background";


import firebase from 'firebase'
import { FIREBASE_CONFIG } from "../core/config";

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

function writeUserData (nombre,email, telefono,comensales,fecha,hora){
  firebase.database().ref('users/').set({
      nombre,
      email,
      telefono,
      comensales,
      fecha,
      hora
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
}


 

export default class ThirdPage extends Component {
    static navigationOptions = {
    title: 'Mis Reservas:',
  };
  render() {
    const { navigate } = this.props.navigation;

    

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
         {writeUserData('Don gato','dongato@micasa.com','8257718', '5', '8-10-2004','10pm')}
        }
        >
        <Text style={styles.ItemStyle}>
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
