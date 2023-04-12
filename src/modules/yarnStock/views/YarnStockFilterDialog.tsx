import { Dialog, useTheme } from "@rneui/themed";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { YarnStockFilterContext } from "../../../context/YarnStockFilterContext";
import ControlledCheckbox from "../../../sharedComponents/inputs/ControlledCheckbox";
import YJText from "../../../sharedComponents/text/YJText";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";

interface YarnStockFilterDialogProps {
	visible: boolean;
	toggleDialog: (value: boolean) => void;
}

const YarnStockFilterDialog = (props: YarnStockFilterDialogProps) => {
	const { visible, toggleDialog } = props;
	const { theme } = useTheme();

	const { control, getValues } = useForm<yarnStock.yarnStockFilter>();

	const closeModal = () => {
		toggleDialog(false);
	};

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	const {
		yarnCategoryIds,
		setYarnCategoryIds,
		yarnColorCategoryIds,
		setYarnColorCategoryIds,
	} = useContext(YarnStockFilterContext);

	const onFilter = () => {
		const formValues = getValues();
		const formYarnCategoryIds: number[] = [];
		formValues.category.forEach((catValue, index) => {
			if (catValue) {
				formYarnCategoryIds.push(index);
			}
		});
		setYarnCategoryIds(formYarnCategoryIds);
		const formYarnColorCategoryIds: number[] = [];
		formValues.colorCategory.forEach((catColorValue, index) => {
			if (catColorValue) {
				formYarnColorCategoryIds.push(index);
			}
		});
		setYarnColorCategoryIds(formYarnColorCategoryIds);
	};

	return (
		<Dialog isVisible={visible} onBackdropPress={closeModal}>
			<Dialog.Title title="Filter Yarn Stock" />
			<YJText bold>Yarn Category</YJText>
			<View>
				{yarnCategories?.map(category => (
					<ControlledCheckbox
						key={category.id}
						control={control}
						title={category.name}
						name={`category.${category.id.toString()}`}
						themeColor="secondary"
						defaultValue={yarnCategoryIds.includes(category.id)}
						onChangeCustom={onFilter}
						disabled={
							yarnCategoryIds.length === 1 &&
							yarnCategoryIds.includes(category.id)
						}
					/>
				))}
			</View>
			<YJText bold>Yarn Color Category</YJText>
			<View>
				{yarnColorCategories?.map(colorCategory => (
					<ControlledCheckbox
						key={colorCategory.id}
						control={control}
						title={colorCategory.name}
						name={`colorCategory.${colorCategory.id.toString()}`}
						themeColor="secondary"
						defaultValue={yarnColorCategoryIds.includes(colorCategory.id)}
						onChangeCustom={onFilter}
						disabled={
							yarnColorCategoryIds.length === 1 &&
							yarnColorCategoryIds.includes(colorCategory.id)
						}
					/>
				))}
			</View>
			<Dialog.Button
				title="Close"
				titleStyle={{ color: theme.colors.secondary }}
				onPress={closeModal}
			/>
		</Dialog>
	);
};

export default YarnStockFilterDialog;
