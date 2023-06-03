import { Card, Skeleton, makeStyles } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import { type TextStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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
				<Skeleton
					LinearGradientComponent={LinearGradient}
					animation="wave"
					style={styles.contentSkeleton}
				/>
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
