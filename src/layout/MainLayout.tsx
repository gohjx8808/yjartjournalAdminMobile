import { Header, useTheme } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import { View } from "react-native";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme();
	return (
		<View>
			<Header
				leftComponent={{
					icon: "menu",
					color: theme.colors.secondary,
				}}
			/>
			{children}
		</View>
	);
};

export default MainLayout;
