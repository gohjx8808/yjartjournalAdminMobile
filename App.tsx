import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainRouter from "./src/modules/router/MainRouter";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = (): JSX.Element => (
	<SafeAreaProvider>
		<NavigationContainer>
			<MainRouter />
		</NavigationContainer>
	</SafeAreaProvider>
);

export default App;
