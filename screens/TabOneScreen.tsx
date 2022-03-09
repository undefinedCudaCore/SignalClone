import React from "react";
import { View, StyleSheet } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from "../SignalAssets/dummy-data/ChatRooms";

const chatRoom1 = ChatRoomData[0];
const chatRoom2 = ChatRoomData[1];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
        <ChatRoomItem chatRoom={chatRoom1} />
        <ChatRoomItem chatRoom={chatRoom2} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
   backgroundColor: 'white',
   flex: 1,
  },
});