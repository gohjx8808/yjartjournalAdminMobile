import { ListItem, makeStyles } from "@rneui/themed";
import YJHeader from "../../../layout/YJHeader";
import { useState } from "react";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../src/queries/masterDataQueries";
import { View } from "react-native";
import YJText from "../../../sharedComponents/text/YJText";

const MasterData = () => {
	const [yarnCategoryExpand, setYarnCategoryExpand] = useState(true);
	const [yarnColorCategoryExpand, setYarnColorCategoryExpand] = useState(true);
	const styles = useStyles();

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	return (
		<YJHeader title="Master Data">
			<View style={styles.parentContainer}>
				<ListItem.Accordion
					containerStyle={styles.accordionContainer}
					content={
						<ListItem.Content>
							<ListItem.Title>
								<YJText bold>Yarn Categories</YJText>
							</ListItem.Title>
						</ListItem.Content>
					}
					isExpanded={yarnCategoryExpand}
					onPress={() => {
						setYarnCategoryExpand(!yarnCategoryExpand);
					}}
				>
					{yarnCategories?.map(category => (
						<ListItem key={category.id}>
							<ListItem.Content>
								<ListItem.Title>{category.name}</ListItem.Title>
							</ListItem.Content>
						</ListItem>
					))}
				</ListItem.Accordion>
				<ListItem.Accordion
					containerStyle={[
						styles.accordionContainer,
						styles.notFirstAccordionContainer,
					]}
					content={
						<ListItem.Content>
							<ListItem.Title>
								<YJText bold>Yarn Color Categories</YJText>
							</ListItem.Title>
						</ListItem.Content>
					}
					isExpanded={yarnColorCategoryExpand}
					onPress={() => {
						setYarnColorCategoryExpand(!yarnColorCategoryExpand);
					}}
				>
					{yarnColorCategories?.map(colorCategory => (
						<ListItem key={colorCategory.id}>
							<ListItem.Content>
								<ListItem.Title>{colorCategory.name}</ListItem.Title>
							</ListItem.Content>
						</ListItem>
					))}
				</ListItem.Accordion>
			</View>
		</YJHeader>
	);
};

export default MasterData;

const useStyles = makeStyles(theme => ({
	parentContainer: {
		margin: 20,
	},
	accordionContainer: {
		backgroundColor: theme.colors.primary,
	},
	notFirstAccordionContainer: {
		marginTop: 20,
	},
}));
