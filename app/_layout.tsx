import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';


export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
    if (!fontsLoaded) return null;

    return (
        <PaperProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen
                            name="(auth)"
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack>
                    <StatusBar style="auto" />
                </SafeAreaView>
            </ThemeProvider>
        </PaperProvider>
    );
}
