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

const MasterData = () => {
	const [yarnCategoryExpand, setYarnCategoryExpand] = useState(true);
	const [yarnColorCategoryExpand, setYarnColorCategoryExpand] = useState(true);
	const [addEditDialogOpen, setAddEditDialogOpen] = useState(false);
	const [addEditDialogData, setAddEditDialogData] =
		useState<masterData.addEditDialogData>({
			title: "",
			onSubmit: () => {},
		});
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

	const onYarnCategoryEdit = (data: optionData) => {
		setAddEditDialogData({
			title: "Edit Yarn Category",
			data,
			onSubmit: () => {
				console.log(data);
			},
		});
		toggleAddEditDialogOpen();
	};

	const onYarnColorCategoryEdit = (data: optionData) => {
		setAddEditDialogData({
			title: "Edit Yarn Color Category",
			data,
			onSubmit: () => {
				console.log(data);
			},
		});
		toggleAddEditDialogOpen();
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
									onYarnCategoryEdit(category);
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
						onPress={toggleYarnColorCategoryExpand}
					>
						{yarnColorCategories?.map(colorCategory => (
							<MasterDataListItem
								key={colorCategory.id}
								item={colorCategory}
								onEdit={() => {
									onYarnColorCategoryEdit(colorCategory);
								}}
								onDelete={() => {
									console.log(colorCategory);
								}}
							/>
						))}
					</ListItem.Accordion>
				</View>
			</YJHeader>
			<AddEditMasterDataDialog
				hideDialog={toggleAddEditDialogOpen}
				visible={addEditDialogOpen}
				dialogData={addEditDialogData}
			/>
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
