import { ListItem, makeStyles } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import YJHeader from "../../../layout/YJHeader";
import YJText from "../../../sharedComponents/text/YJText";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../src/queries/masterDataQueries";
import MasterDataListItem from "./MasterDataListItem";

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
						<MasterDataListItem
							key={category.id}
							item={category}
							onEdit={() => {
								console.log(category);
							}}
							onDelete={() => {
								console.log(category);
							}}
						/>
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
						<MasterDataListItem
							key={colorCategory.id}
							item={colorCategory}
							onEdit={() => {
								console.log(colorCategory);
							}}
							onDelete={() => {
								console.log(colorCategory);
							}}
						/>
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
