import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./src/modules/router/MainRouter";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createTheme, ThemeProvider } from "@rneui/themed";

const App = (): JSX.Element => {
	const theme = createTheme({
		lightColors: {
			primary: "#f5dbc9",
			secondary: "#B57B5E",
		},
		darkColors: {
			primary: "#B57B5E",
			secondary: "#f5dbc9",
		},
		mode: "light",
	});

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<MainRouter />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
