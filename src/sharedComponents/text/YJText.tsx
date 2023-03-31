import type { TextProps } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

interface YJTextProps extends TextProps {
	bold?: boolean;
}

const YJText = (props: YJTextProps): JSX.Element => {
	const { children, bold } = props;

	return (
		<Text style={(bold ?? false) && styles.bold} {...props}>
			{children}
		</Text>
	);
};

export default YJText;

const styles = StyleSheet.create({
	bold: {
		fontWeight: "bold",
	},
});
