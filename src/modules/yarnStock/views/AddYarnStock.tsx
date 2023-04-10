import { Button, makeStyles } from "@rneui/themed";
import { useForm } from "react-hook-form";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import { ScrollView } from "react-native";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../src/queries/yarnStockQueries";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";

const AddYarnStock = () => {
	const styles = useStyles();

	const { control } = useForm();
	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	return (
		<YJHeader title="Add Yarn Stock" back>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<ControlledTextInput
					control={control}
					name="detailedColor"
					label="Detailed Color"
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="cost"
					label="Cost"
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="quantity"
					label="Quantity"
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="reorderLevel"
					label="Reorder Level"
				/>
				<ControlledSelect
					control={control}
					name="yarnCategory"
					title="Yarn Category"
					options={yarnCategories ?? []}
				/>
				<ControlledSelect
					control={control}
					name="yarnColorCategory"
					title="Yarn Color Category"
					options={yarnColorCategories ?? []}
				/>
				<ControlledDatePicker
					control={control}
					name="lastOrderedAt"
					title="Last Ordered Date"
				/>
				<Button color="secondary" containerStyle={styles.submitBtnContainer}>
					Submit
				</Button>
			</ScrollView>
		</YJHeader>
	);
};

export default AddYarnStock;

const useStyles = makeStyles(theme => ({
	scrollViewContent: {
		marginHorizontal: 20,
		marginVertical: 40,
	},
	submitBtnContainer: {
		marginVertical: 20,
	},
}));
