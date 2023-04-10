import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { Button, Header, Icon, useTheme } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import YJText from "../sharedComponents/text/YJText";
import { useNavigation } from "@react-navigation/native";
import type { DrawerParamList } from "../modules/router/MainRouter";

interface YJHeaderProps {
	title: string;
	back?: boolean;
}

const YJHeader: FC<PropsWithChildren & YJHeaderProps> = props => {
	const { title, back, children } = props;
	const { theme } = useTheme();
	const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

	return (
		<>
			<Header
				leftComponent={
					<Button
						onPress={() => {
							if (back === true) {
								navigation.goBack();
							} else {
								navigation.toggleDrawer();
							}
						}}
					>
						<Icon
							name={back === true ? "arrow-back-ios" : "menu"}
							color={theme.colors.secondary}
						/>
					</Button>
				}
				centerComponent={
					<YJText h4 bold>
						{title}
					</YJText>
				}
				centerContainerStyle={{ justifyContent: "center" }}
			/>
			{children}
		</>
	);
};

export default YJHeader;
