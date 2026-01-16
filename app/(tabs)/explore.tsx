import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Hello world" subtitle={"Subtitle"} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
        </Appbar.Header>

        <View style={styles.container}>
          <Text style={{fontSize:20}}>El contador es:</Text>
          <Text style={{fontSize:30, marginTop:30,marginBottom:70}}>{count}</Text>

          <Pressable
            onPress={increment}
            onLongPress={reset}
            style={({ pressed }) => [
              styles.primaryButton, 
              pressed && styles.primaryButtonPressed]}
          >
            <Text style={{color: 'white'}}>Pressable!!</Text>
          </Pressable>            
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c97decc7',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
  },

  primaryButton:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#5856d6',
  },

  primaryButtonPressed:{
    opacity: 0.75
  },

  header: {
    width: '100%',
  },
});


// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
