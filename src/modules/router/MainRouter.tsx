/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon, useTheme } from "@rneui/themed";
import React from "react";
import Dashboard from "../dashboard/views/Dashboard";
import AddYarnStock from "../yarnStock/views/AddYarnStock";
import YarnStocks from "../yarnStock/views/YarnStocks";
import routeNames from "./routeNames";
import MasterData from "../masterData/views/MasterData";
import UpdateYarnStock from "../yarnStock/views/UpdateYarnStock";
import SignIn from "../auth/views/SignIn";

export type YarnStockNavigatorParamList = {
	[routeNames.YARN_STOCKS_DETAILS]: undefined;
	[routeNames.ADD_YARN_STOCK]: undefined;
	[routeNames.UPDATE_YARN_STOCK]: yarnStock.updateYarnStockRouteParams;
};

export type DrawerParamList = {
	[routeNames.DASHBOARD]: undefined;
	[routeNames.YARN_STOCKS]: undefined;
};

export type MainRouterParamList = {
	[routeNames.SIGN_IN]: undefined;
	[routeNames.DRAWER_NAV]: undefined;
};

const Drawer = createDrawerNavigator();
const YarnStockStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const YarnStockNavigator = () => {
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

const DrawerRouter = () => {
	const { theme } = useTheme();

	return (
		<Drawer.Navigator
			initialRouteName={routeNames.DASHBOARD}
			screenOptions={{
				headerShown: false,
				drawerActiveTintColor: theme.colors.secondary,
				drawerActiveBackgroundColor: theme.colors.primary,
				lazy: true,
			}}
		>
			<Drawer.Screen
				name={routeNames.DASHBOARD}
				component={Dashboard}
				options={{ drawerIcon: props => <Icon {...props} name="dashboard" /> }}
			/>
			<Drawer.Screen
				name={routeNames.YARN_STOCKS}
				component={YarnStockNavigator}
				options={{ drawerIcon: props => <Icon {...props} name="inventory" /> }}
			/>
			<Drawer.Screen
				name={routeNames.MASTER_DATA}
				component={MasterData}
				options={{ drawerIcon: props => <Icon {...props} name="storage" /> }}
			/>
		</Drawer.Navigator>
	);
};

const MainRouter = () => {
	return (
		<MainStack.Navigator
			initialRouteName={routeNames.SIGN_IN}
			screenOptions={{ headerShown: false }}
		>
			<MainStack.Screen name={routeNames.SIGN_IN} component={SignIn} />
			<MainStack.Screen name={routeNames.DRAWER_NAV} component={DrawerRouter} />
		</MainStack.Navigator>
	);
};

export default MainRouter;
