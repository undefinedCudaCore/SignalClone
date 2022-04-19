import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>😙</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        flex: 1,
        
    },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#2C6BED',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 35,

    },
});

export default MessageInput