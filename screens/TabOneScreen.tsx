import React from "react";
import { View, StyleSheet } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
   backgroundColor: 'white',
   flex: 1,
  },
});