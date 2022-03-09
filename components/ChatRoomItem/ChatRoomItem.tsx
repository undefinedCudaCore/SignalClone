import React from "react";
import { Text, Image, View } from 'react-native';
import styles from './styles';


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

