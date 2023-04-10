/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@rneui/themed";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import AddYarnStockSchema from "../../../validationSchemas/AddYarnStockSchema";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../src/queries/yarnStockQueries";

const AddYarnStock = () => {
	const styles = useStyles();
	const insets = useSafeAreaInsets();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(AddYarnStockSchema) });

	console.log(errors.yarnCategory);

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	const onSubmit = () => {
		console.log("submit");
	};

	return (
		<YJHeader title="Add Yarn Stock" back>
			<ScrollView
				contentInset={{ bottom: insets.bottom }}
				contentInsetAdjustmentBehavior="automatic"
				contentContainerStyle={styles.scrollViewContent}
			>
				<ControlledTextInput
					control={control}
					name="detailedColor"
					label="Detailed Color"
					errorMessage={errors.detailedColor?.message?.toString()}
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="cost"
					label="Cost"
					errorMessage={errors.cost?.message?.toString()}
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="quantity"
					label="Quantity"
					errorMessage={errors.quantity?.message?.toString()}
				/>
				<ControlledTextInput
					control={control}
					keyboardType="numeric"
					name="reorderLevel"
					label="Reorder Level"
					errorMessage={errors.reorderLevel?.message?.toString()}
				/>
				<ControlledSelect
					control={control}
					name="yarnCategory"
					title="Yarn Category"
					options={yarnCategories ?? []}
					// @ts-ignore
					errorMessage={errors.yarnCategory?.id.message?.toString()}
				/>
				<ControlledSelect
					control={control}
					name="yarnColorCategory"
					title="Yarn Color Category"
					options={yarnColorCategories ?? []}
					// @ts-ignore
					errorMessage={errors.yarnColorCategory?.id.message?.toString()}
				/>
				<ControlledDatePicker
					control={control}
					name="lastOrderedAt"
					title="Last Ordered Date"
				/>
				<Button
					color="secondary"
					containerStyle={styles.submitBtnContainer}
					onPress={handleSubmit(onSubmit)}
				>
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
