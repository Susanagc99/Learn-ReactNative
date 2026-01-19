import { useLogin } from "@/hooks/useLogin";
import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function LoginScreen() {
    const {
        username,
        password,
        setUsername,
        setPassword,
        apiResponse,
        loading,
        handleLogin,
    } = useLogin();

    return (
        <>
            <ScrollView style={styles.container}>

                <Image
                    source={require("../../assets/images/header.jpg")}
                    style={styles.backgroundImage}
                    resizeMode="cover">
                </Image>

                <LinearGradient
                    colors={[
                        "rgba(36, 11, 72, 0)",   // transparente arriba
                        "rgba(36, 11, 72, 0.17)",
                        "#240b48d2",
                        "#240b48",            // color fondo abajo
                    ]}
                    style={styles.gradient}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>SIGN IN</Text>
                    <Text style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "Poppins_400Regular" }}>
                        Sign in with email address
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Yourname@gmail.com"
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#e7e7e7da"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#e7e7e7da"
                    />

                    <Pressable style={styles.primaryButton} onPress={handleLogin}>
                        <Text style={{ color: "white", fontFamily: "Poppins_400Regular", fontSize: 15 }}>Sign up</Text>
                    </Pressable>
                </View>


            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#240B48",
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "700",
    },

    content: {
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 280,
        marginRight: 25,
        marginBottom: 40,
        marginLeft: 30,
        gap: 20,
    },

    backgroundImage: {
        position: 'absolute',
        top: 0,
        right: -30,
        width: 850,
        height: 450,
        resizeMode: "contain",
    },

    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 800,
        height: 500,
    },

    title: {
        fontSize: 65,
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "500",
        color: "white",
    },

    primaryButton: {
        backgroundColor: "#a180da",
        marginBottom: 50,
        borderRadius: 10,
        paddingHorizontal: 135,
        alignSelf: "center",
        justifyContent: "flex-start",
        paddingVertical: 10,
    },

    input: {
        width: "100%",
        borderWidth: 1,
        backgroundColor: "#00000029",
        borderColor: "#00000054",
        borderRadius: 8,
        marginBottom: 0,
        color: "white",
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        paddingHorizontal: 20,
    },
});
