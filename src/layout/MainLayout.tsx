import { Button, Header, Icon, useTheme } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import { View } from "react-native";
import YJText from "../sharedComponents/text/YJText";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme();
	return (
		<View>
			<Header
				leftComponent={
					<Button>
						<Icon name="menu" color={theme.colors.secondary} />
					</Button>
				}
				centerComponent={
					<YJText h4 bold>
						Yarn Stocks
					</YJText>
				}
				centerContainerStyle={{ justifyContent: "center" }}
			/>
			{children}
		</View>
	);
};

export default MainLayout;
