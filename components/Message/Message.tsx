import React from "react";
import { View, Text, StyleSheet } from "react-native";


const blue = '#2C6BED';
const grey = 'lightgrey';

const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myID;

    return (
        <View style={[styles.container, isMe ? styles.leftContainer : styles.rightContainer]}
            >
            <Text style={{color: isMe ? 'white' : 'black'}}>{message.content}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    leftContainer: {
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10,
    },
});

export default Message;