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
import AddEditMasterDataDialog from "./AddEditMasterDataDialog";
import DeleteMasterDataDialog from "./DeleteMasterDataDialog";

const MasterData = () => {
	const [yarnCategoryExpand, setYarnCategoryExpand] = useState(true);
	const [yarnColorCategoryExpand, setYarnColorCategoryExpand] = useState(true);
	const [addEditDialogOpen, setAddEditDialogOpen] = useState(false);
	const [addEditDialogData, setAddEditDialogData] =
		useState<masterData.addEditDialogData | null>(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteDialogData, setDeleteDialogData] =
		useState<masterData.deleteDialogData | null>(null);
	const styles = useStyles();

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	const toggleYarnCategoryExpand = () => {
		setYarnCategoryExpand(!yarnCategoryExpand);
	};

	const toggleYarnColorCategoryExpand = () => {
		setYarnColorCategoryExpand(!yarnColorCategoryExpand);
	};

	const toggleAddEditDialogOpen = () => {
		setAddEditDialogOpen(!addEditDialogOpen);
	};

	const onEdit = (data: optionData, type: masterData.masterDataType) => {
		setAddEditDialogData({
			title: `Edit ${type}`,
			data,
			onSubmit: () => {
				console.log(data);
			},
		});
		toggleAddEditDialogOpen();
	};

	const toggleDeleteDialogOpen = () => {
		setDeleteDialogOpen(!deleteDialogOpen);
	};

	const onDelete = (data: optionData, type: masterData.masterDataType) => {
		setDeleteDialogData({
			type,
			data,
			onSubmit: () => {
				console.log(data);
			},
		});
		toggleDeleteDialogOpen();
	};

	return (
		<>
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
						onPress={toggleYarnCategoryExpand}
					>
						{yarnCategories?.map(category => (
							<MasterDataListItem
								key={category.id}
								item={category}
								onEdit={() => {
									onEdit(category, "Yarn Category");
								}}
								onDelete={() => {
									onDelete(category, "Yarn Category");
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
						onPress={toggleYarnColorCategoryExpand}
					>
						{yarnColorCategories?.map(colorCategory => (
							<MasterDataListItem
								key={colorCategory.id}
								item={colorCategory}
								onEdit={() => {
									onEdit(colorCategory, "Yarn Color Category");
								}}
								onDelete={() => {
									onDelete(colorCategory, "Yarn Color Category");
								}}
							/>
						))}
					</ListItem.Accordion>
				</View>
			</YJHeader>
			{addEditDialogData !== null && (
				<AddEditMasterDataDialog
					hideDialog={toggleAddEditDialogOpen}
					visible={addEditDialogOpen}
					dialogData={addEditDialogData}
				/>
			)}
			{deleteDialogData !== null && (
				<DeleteMasterDataDialog
					hideDialog={toggleDeleteDialogOpen}
					visible={deleteDialogOpen}
					dialogData={deleteDialogData}
				/>
			)}
		</>
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
