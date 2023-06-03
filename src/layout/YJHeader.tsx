import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Button, Header, Icon, makeStyles, useTheme } from "@rneui/themed";
import type { HeaderProps } from "@rneui/themed";
import React, { type FC, type PropsWithChildren } from "react";
import {
	ScrollView,
	Platform,
	type ViewStyle,
	RefreshControl,
} from "react-native";
import type { DrawerParamList } from "../modules/router/MainRouter";
import YJText from "../sharedComponents/text/YJText";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface YJHeaderProps
	extends Omit<
		HeaderProps,
		"leftComponent" | "centerComponent" | "centerContainerStyle"
	> {
	title: string;
	back?: boolean;
	scrollViewContentCenter?: boolean;
	customScrollViewContentContainerStyle?: ViewStyle;
	refreshing?: boolean;
	onRefresh?: () => void;
}

const YJHeader: FC<PropsWithChildren & YJHeaderProps> = props => {
	const {
		title,
		back = false,
		children,
		scrollViewContentCenter = false,
		customScrollViewContentContainerStyle = {},
		onRefresh,
		refreshing,
		...rest
	} = props;
	const { theme } = useTheme();
	const insets = useSafeAreaInsets();
	const styles = useStyles();
	const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

	return (
		<>
			<Header
				{...rest}
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
					{ paddingBottom: Platform.OS === "android" ? 50 + insets.bottom : 0 },
				]}
				contentInsetAdjustmentBehavior="automatic"
				contentInset={{ bottom: insets.bottom }}
				refreshControl={
					<RefreshControl
						refreshing={refreshing ?? false}
						onRefresh={onRefresh}
					/>
				}
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
