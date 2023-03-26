import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainRouter from "./src/modules/router/MainRouter";

const App = (): JSX.Element => (
	<NavigationContainer>
		<MainRouter />
	</NavigationContainer>
);

export default App;
