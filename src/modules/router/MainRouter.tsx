import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RawStocks from "../rawStock/views/RawStocks";
import React from "react";

const Stack = createNativeStackNavigator();

const MainRouter = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={RawStocks}
				options={{title: "Welcome"}}
			/>
		</Stack.Navigator>
	);
};

export default MainRouter;
