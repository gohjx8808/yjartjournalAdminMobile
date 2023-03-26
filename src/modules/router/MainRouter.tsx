import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YarnStocks from "../yarnStock/views/YarnStocks";
import React from "react";

const Stack = createNativeStackNavigator();

const MainRouter = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="yarnStock"
				component={YarnStocks}
				options={{ title: "Yarn Stocks" }}
			/>
		</Stack.Navigator>
	);
};

export default MainRouter;
