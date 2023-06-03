import { Card, makeStyles } from "@rneui/themed";
import { type TextStyle } from "react-native";
import YJLoadingSkeleton from "../../../sharedComponents/YJLoadingSkeleton";
import YJText from "../../../sharedComponents/text/YJText";

interface StatisticsCardProps {
	title: string;
	contentStyle?: TextStyle;
	content?: number;
	loading: boolean;
}

const StatisticsCard = (props: StatisticsCardProps) => {
	const styles = useStyles();
	const { title, contentStyle, content, loading } = props;

	return (
		<Card containerStyle={{ padding: 50 }}>
			<Card.Title h4 style={styles.secondaryTitle}>
				{title}
			</Card.Title>
			{loading ? (
				<YJLoadingSkeleton style={styles.contentSkeleton} />
			) : (
				<YJText h1 center style={contentStyle}>
					{content}
				</YJText>
			)}
		</Card>
	);
};

export default StatisticsCard;

const useStyles = makeStyles(theme => ({
	secondaryTitle: {
		color: theme.colors.secondary,
	},
	contentSkeleton: {
		height: 100,
	},
}));
