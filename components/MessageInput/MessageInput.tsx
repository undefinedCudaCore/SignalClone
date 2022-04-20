import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="smile-wink" size={24} color="grey" style={styles.icon} />
                <TextInput style={styles.input}/>
                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <FontAwesome5 name="microphone-alt" size={20} color="grey" style={styles.icon} />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                <AntDesign name="pluscircleo" size={40} color="white" />
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,

    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,

    },
    input: {
        flex: 1,
        marginHorizontal: 5,

    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
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