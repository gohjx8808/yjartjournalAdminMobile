import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YarnStocks from "../yarnStock/views/YarnStocks";
import React from "react";
import MainLayout from "../../layout/MainLayout";

const Stack = createNativeStackNavigator();

const MainRouter = (): JSX.Element => {
	return (
		<MainLayout>
			<Stack.Navigator>
				<Stack.Screen
					name="yarnStock"
					component={YarnStocks}
					options={{ title: "Yarn Stocks" }}
				/>
			</Stack.Navigator>
		</MainLayout>
	);
};

export default MainRouter;
