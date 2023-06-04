import { Card, makeStyles } from "@rneui/themed";
import { type TextStyle } from "react-native";
import YJLoadingSkeleton from "../../../sharedComponents/YJLoadingSkeleton";
import YJText from "../../../sharedComponents/text/YJText";
import { VictoryPie } from "victory-native";

interface StatisticsCardProps {
	title: string;
	contentStyle?: TextStyle;
	textContent?: number;
	loading: boolean;
	chartData?: dashboard.chartData[];
}

const StatisticsCard = (props: StatisticsCardProps) => {
	const styles = useStyles(props);
	const { title, contentStyle, textContent, loading, chartData } = props;

	return (
		<Card containerStyle={styles.cardContainer}>
			<Card.Title h4 style={styles.secondaryTitle}>
				{title}
			</Card.Title>
			{loading ? (
				<YJLoadingSkeleton style={styles.contentSkeleton} />
			) : chartData === undefined ? (
				<YJText h1 center style={contentStyle}>
					{textContent}
				</YJText>
			) : (
				<VictoryPie
					padding={{ left: 65, right: 65 }}
					width={300}
					height={300}
					data={chartData}
					colorScale="red"
					labels={({ datum }: { datum: dashboard.chartData }) =>
						`${datum.name}\n${datum.y}`
					}
				/>
			)}
		</Card>
	);
};

export default StatisticsCard;

const useStyles = makeStyles((theme, props: StatisticsCardProps) => ({
	cardContainer: {
		padding: props.chartData !== undefined ? 15 : 50,
	},
	secondaryTitle: {
		color: theme.colors.secondary,
	},
	contentSkeleton: {
		height: 100,
	},
}));
