import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  
  return (
    <>
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>SIGN IN</Text>
            <Text style={{color: 'white', fontFamily: 'Poppins_400Regular'}}>Sign in with email address</Text>
          </View>

          <Pressable
            style={styles.primaryButton}
          >
            <Text style={{color: 'white'}}>Sign up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#240B48',
    fontSize: 50,
  },

  content:{
    flex:1,
    alignItems: 'start',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 20,
  },

  title: {
    fontSize: 60,
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '700',
    color: 'white',
  },

  primaryButton:{
    backgroundColor: '#a180da',
    marginBottom: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
  }


});

