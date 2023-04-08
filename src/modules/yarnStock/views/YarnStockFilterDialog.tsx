import { Dialog, useTheme } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import ControlledCheckbox from "../../../sharedComponents/inputs/ControlledCheckbox";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../src/queries/yarnStockQueries";

interface YarnStockFilterDialogProps {
	visible: boolean;
	toggleDialog: (value: boolean) => void;
}

const YarnStockFilterDialog = (props: YarnStockFilterDialogProps) => {
	const { visible, toggleDialog } = props;
	const { theme } = useTheme();

	const { control, getValues } = useForm();

	const closeModal = () => {
		toggleDialog(false);
	};

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	const onFilter = () => {
		const formValues = getValues();
		console.log(formValues);
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
						defaultValue={true}
						onChangeCustom={onFilter}
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
						defaultValue={true}
						onChangeCustom={onFilter}
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
