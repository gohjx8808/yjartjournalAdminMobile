import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { Button, Header, Icon, makeStyles, useTheme } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import YJText from "../sharedComponents/text/YJText";
import { useNavigation } from "@react-navigation/native";
import type { DrawerParamList } from "../modules/router/MainRouter";
import { ScrollView } from "react-native";
import type { ViewStyle } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface YJHeaderProps {
	title: string;
	back?: boolean;
	scrollViewContentCenter?: boolean;
	customScrollViewContentContainerStyle?: ViewStyle;
}

const YJHeader: FC<PropsWithChildren & YJHeaderProps> = props => {
	const {
		title,
		back = false,
		children,
		scrollViewContentCenter = false,
		customScrollViewContentContainerStyle = {},
	} = props;
	const { theme } = useTheme();
	const styles = useStyles();
	const insets = useSafeAreaInsets();
	const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

	return (
		<>
			<Header
				leftComponent={
					<Button
						onPress={() => {
							if (back) {
								navigation.goBack();
							} else {
								navigation.toggleDrawer();
							}
						}}
					>
						<Icon
							name={back ? "arrow-back-ios" : "menu"}
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
			<ScrollView
				contentContainerStyle={[
					customScrollViewContentContainerStyle,
					scrollViewContentCenter && styles.centerScrollviewContent,
				]}
				contentInsetAdjustmentBehavior="automatic"
				contentInset={{ bottom: insets.bottom }}
			>
				{children}
			</ScrollView>
		</>
	);
};

export default YJHeader;

const useStyles = makeStyles(() => ({
	centerScrollviewContent: {
		justifyContent: "center",
		alignItems: "center",
	},
}));
