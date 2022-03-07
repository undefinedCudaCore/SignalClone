import { Text, Image, View, StyleSheet } from 'react-native';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
      <View>
        <View style={styles.row}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.text}>11:11 AM</Text>
        </View> 
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obcaecati? Eum laborum soluta temporibus vitae doloribus dignissimos, quaerat saepe quasi. Voluptatibus est, inventore illo natus repellat vitae architecto magnam temporibus.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: 100,
    height: 100

  },
  name: {

  },
  row: {

  },
  text: {
    fontSize: 30, 
    color: 'blue'
  }
});