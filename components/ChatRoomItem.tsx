import React from "react";
import { Text, Image, View, StyleSheet } from 'react-native';


export default function ChatRoomItem () {
    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>4</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>Elon Musk</Text>
                    <Text style={styles.text}>11:11 AM</Text>
                </View> 
               <Text numberOfLines={1} style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt odio maiores fugiat obcaecati recusandae veritatis eum inventore corporis porro ab impedit laudantium minus non quasi atque voluptatem, placeat vero esse.</Text>
            </View>
      </View>
    );
}

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