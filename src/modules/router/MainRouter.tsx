import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./dashboard/views/Dashboard";
import { getHeaderTitle } from "@react-navigation/elements";
import YJHeader from "../../layout/YJHeader";
import { useTheme } from "@rneui/themed";
import routeNames from "./routeNames";
import YarnStocks from "../yarnStock/views/YarnStocks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
				header: headerProps => {
					const { options, route } = headerProps;
					const title = getHeaderTitle(options, route.name);

					return <YJHeader {...headerProps} title={title} />;
				},
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
