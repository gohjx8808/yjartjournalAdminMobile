import type { TextProps } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

interface YJTextProps extends TextProps {
	bold?: boolean;
	center?: boolean;
}

const YJText = (props: YJTextProps): JSX.Element => {
	const { children, bold, center } = props;

	return (
		<Text
			{...props}
			style={[
				(bold ?? false) && styles.bold,
				(center ?? false) && styles.center,
				props.style,
			]}
		>
			{children}
		</Text>
	);
};

export default YJText;

const styles = StyleSheet.create({
	bold: {
		fontWeight: "bold",
	},
	center: {
		textAlign: "center",
	},
});
