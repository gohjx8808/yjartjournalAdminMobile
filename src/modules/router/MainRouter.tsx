import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./dashboard/views/Dashboard";
import { getHeaderTitle } from "@react-navigation/elements";
import YJHeader from "../../layout/YJHeader";
import { useTheme } from "@rneui/themed";
import routeNames from "./routeNames";
import YarnStocks from "../yarnStock/views/YarnStocks";

const Drawer = createDrawerNavigator();

const MainRouter = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<Drawer.Navigator
			useLegacyImplementation={true}
			initialRouteName={routeNames.DASHBOARD}
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
			<Drawer.Screen name={routeNames.YARN_STOCKS} component={YarnStocks} />
		</Drawer.Navigator>
	);
};

export default MainRouter;
