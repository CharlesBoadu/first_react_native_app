import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {
  const handleTextPress = () => {console.log('Text Pressed')}
  const handleButtonPress = () => {console.log("Button Pressed")}
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleTextPress}>Hello World</Text>
      <Button title='click Me' color='orange' onPress={() => Alert.prompt("Greetings", "Hello, Enter your name", text => console.log(text))
      }
      />
      {/* <TouchableHighlight onPress={handleImagePress}>
        <Image source={{ 
          width: 100,
          height: 100, 
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
