import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor:'#2C6BED',
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 10,
  
    },
    badgeText: {
      color: 'white',
      fontSize: 11,
      fontWeight: 'bold',
      // marginLeft: 4.5,
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 1,
    },
    text: {
      color: 'grey',
    }, 
  });

  export default styles;