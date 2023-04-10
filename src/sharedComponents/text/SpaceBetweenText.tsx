import { StyleSheet, View } from "react-native";
import YJText from "./YJText";

interface SpaceBetweenTextProps {
	frontText: string;
	backText: string | number;
	textColor?: string;
}

const SpaceBetweenText = (props: SpaceBetweenTextProps) => {
	const { frontText, backText, textColor } = props;

	return (
		<View style={styles.container}>
			<YJText bold style={{ color: textColor }}>
				{frontText}
			</YJText>
			<YJText style={{ color: textColor }}>{backText}</YJText>
		</View>
	);
};

export default SpaceBetweenText;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 3,
	},
});
