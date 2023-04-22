/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import React from "react";
import Dashboard from "../dashboard/views/Dashboard";
import AddYarnStock from "../yarnStock/views/AddYarnStock";
import YarnStocks from "../yarnStock/views/YarnStocks";
import routeNames from "./routeNames";
import MasterData from "../masterData/views/MasterData";
import UpdateYarnStock from "../yarnStock/views/UpdateYarnStock";

export type YarnStockNavigatorParamList = {
	[routeNames.YARN_STOCKS_DETAILS]: undefined;
	[routeNames.ADD_YARN_STOCK]: undefined;
	[routeNames.UPDATE_YARN_STOCK]: yarnStock.updateYarnStockRouteParams;
};

export type DrawerParamList = {
	[routeNames.DASHBOARD]: undefined;
	[routeNames.YARN_STOCKS]: undefined;
};

const Drawer = createDrawerNavigator();
const YarnStockStack = createNativeStackNavigator();

const YarnStockNavigator = (): JSX.Element => {
	return (
		<YarnStockStack.Navigator
			initialRouteName={routeNames.YARN_STOCKS_DETAILS}
			screenOptions={{ headerShown: false }}
		>
			<YarnStockStack.Screen
				name={routeNames.YARN_STOCKS_DETAILS}
				component={YarnStocks}
			/>
			<YarnStockStack.Screen
				name={routeNames.ADD_YARN_STOCK}
				component={AddYarnStock}
			/>
			<YarnStockStack.Screen
				name={routeNames.UPDATE_YARN_STOCK}
				component={UpdateYarnStock}
			/>
		</YarnStockStack.Navigator>
	);
};

const MainRouter = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<Drawer.Navigator
			useLegacyImplementation={true}
			initialRouteName={routeNames.YARN_STOCKS}
			screenOptions={{
				headerShown: false,
				drawerActiveTintColor: theme.colors.secondary,
				drawerActiveBackgroundColor: theme.colors.primary,
			}}
		>
			<Drawer.Screen name={routeNames.DASHBOARD} component={Dashboard} />
			<Drawer.Screen
				name={routeNames.YARN_STOCKS}
				component={YarnStockNavigator}
			/>
			<Drawer.Screen name={routeNames.MASTER_DATA} component={MasterData} />
		</Drawer.Navigator>
	);
};

export default MainRouter;
