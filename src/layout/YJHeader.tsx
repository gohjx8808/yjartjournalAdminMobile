import type { DrawerHeaderProps } from "@react-navigation/drawer";
import { Button, Header, Icon, useTheme } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import YJText from "../sharedComponents/text/YJText";

interface YJHeaderProps {
	title: string;
}

const YJHeader: FC<PropsWithChildren & DrawerHeaderProps & YJHeaderProps> = ({
	navigation,
	title,
}) => {
	const { theme } = useTheme();

	return (
		<Header
			leftComponent={
				<Button
					onPress={() => {
						navigation.toggleDrawer();
					}}
				>
					<Icon name="menu" color={theme.colors.secondary} />
				</Button>
			}
			centerComponent={
				<YJText h4 bold>
					{title}
				</YJText>
			}
			centerContainerStyle={{ justifyContent: "center" }}
		/>
	);
};

export default YJHeader;
