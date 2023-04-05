import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./src/modules/router/MainRouter";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

	const client = new QueryClient();

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={client}>
					<NavigationContainer>
						<MainRouter />
					</NavigationContainer>
				</QueryClientProvider>
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
