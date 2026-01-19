import { loginPost } from "@/services/users";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [apiResponse, setApiResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        if (username === "" || password === "") {
            Alert.alert("Error", "Please enter both username and password.");
            return;
        }
        setLoading(true);
        try {
            const response = await loginPost(username, password);
            if (response.data.user.name) {
                router.replace("/(tabs)");
            }
        } catch {
            Alert.alert("Error", "Invalid username or password.");
        } finally {
            setLoading(false);
        }
    };
        

        return{
            username,
            password,
            setUsername,
            setPassword,
            apiResponse,
            loading,
            handleLogin,
        };
    };
