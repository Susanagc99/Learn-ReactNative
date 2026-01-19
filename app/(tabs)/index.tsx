import { router } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function HomeScreen() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  const handleLogout = () => {
    router.replace("/(auth)/login");
  }

  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  
  return (
    <>
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

           <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text>Cerrar sesión</Text>
          </Pressable>        
        </View>
    </>
  )
};

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
    marginTop: 0,
  },

  logoutButton: {
    backgroundColor: "#ffffffa2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 150,
    marginRight: 20,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
});
