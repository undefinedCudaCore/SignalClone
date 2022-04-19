import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from "../SignalAssets/dummy-data/ChatRooms";


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>

      <FlatList 
        data={ChatRoomData}
        renderItem={ (props) => <ChatRoomItem chatRoom={props.item} />}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() =>       
        <FlatList 
          style={styles.secondFlatList}
          data={ChatRoomData}
          renderItem={ (props) => <ChatRoomItem chatRoom={props.item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
   backgroundColor: 'white',
   flex: 1,
  },
  secondFlatList: {
    padding: 10,
    backgroundColor: '#C0C0C0',
  },
});