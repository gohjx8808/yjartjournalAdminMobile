/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import React from "react";
import AddYarnStock from "../yarnStock/views/AddYarnStock";
import YarnStocks from "../yarnStock/views/YarnStocks";
import Dashboard from "./dashboard/views/Dashboard";
import routeNames from "./routeNames";

export interface YarnStockNavigatorParamList {
	[routeNames.YARN_CATEGORY]: undefined;
	[routeNames.ADD_YARN_STOCK]: undefined;
}

export type DrawerParamList = {
	[routeNames.DASHBOARD]: undefined;
	[routeNames.YARN_NAV]: undefined;
};

const Drawer = createDrawerNavigator();
const YarnStockStack = createNativeStackNavigator();

const YarnStockNavigator = (): JSX.Element => {
	return (
		<YarnStockStack.Navigator
			initialRouteName={routeNames.YARN_CATEGORY}
			screenOptions={{ headerShown: false }}
		>
			<YarnStockStack.Screen
				name={routeNames.YARN_CATEGORY}
				component={YarnStocks}
			/>
			<YarnStockStack.Screen
				name={routeNames.ADD_YARN_STOCK}
				component={AddYarnStock}
			/>
		</YarnStockStack.Navigator>
	);
};

const MainRouter = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<Drawer.Navigator
			useLegacyImplementation={true}
			initialRouteName={routeNames.YARN_NAV}
			screenOptions={{
				headerShown: false,
				drawerActiveTintColor: theme.colors.secondary,
				drawerActiveBackgroundColor: theme.colors.primary,
			}}
		>
			<Drawer.Screen name={routeNames.DASHBOARD} component={Dashboard} />
			<Drawer.Screen
				name={routeNames.YARN_NAV}
				component={YarnStockNavigator}
			/>
		</Drawer.Navigator>
	);
};

export default MainRouter;
