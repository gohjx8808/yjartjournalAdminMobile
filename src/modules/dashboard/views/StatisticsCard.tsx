import { Card, makeStyles } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import { type TextStyle } from "react-native";

interface StatisticsCardProps {
	title: string;
	contentStyle?: TextStyle;
	content: number;
}

const StatisticsCard = (props: StatisticsCardProps) => {
	const styles = useStyles();
	const { title, contentStyle, content } = props;

	return (
		<Card containerStyle={{ padding: 50 }}>
			<Card.Title h4 style={styles.secondaryTitle}>
				{title}
			</Card.Title>
			<YJText h1 center style={contentStyle}>
				{content}
			</YJText>
		</Card>
	);
};

export default StatisticsCard;

const useStyles = makeStyles(theme => ({
	secondaryTitle: {
		color: theme.colors.secondary,
	},
}));
