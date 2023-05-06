import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@rneui/themed";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { convertUTCToMYT } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import AddYarnStockSchema from "../../../validationSchemas/AddYarnStockSchema";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";
import { useAddYarnStock } from "../src/queries/yarnStockMutations";
import YJImagePicker from "../../../sharedComponents/inputs/YJImagePicker";

const AddYarnStock = () => {
	const styles = useStyles();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<yarnStock.addYarnStockPayload>({
		resolver: yupResolver(AddYarnStockSchema),
	});

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();
	const { mutate: addYarnStock } = useAddYarnStock();

	const onSubmit: SubmitHandler<yarnStock.addYarnStockPayload> = formData => {
		addYarnStock({
			...formData,
			lastOrderedDate: convertUTCToMYT(formData.lastOrderedDate),
		});
	};

	return (
		<YJHeader
			title="Add Yarn Stock"
			back
			customScrollViewContentContainerStyle={styles.scrollViewContent}
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
				errorMessage={errors.yarnCategory?.id?.message?.toString()}
			/>
			<ControlledSelect
				control={control}
				name="yarnColorCategory"
				title="Yarn Color Category"
				options={yarnColorCategories ?? []}
				errorMessage={errors.yarnColorCategory?.id?.message?.toString()}
			/>
			<ControlledDatePicker
				control={control}
				name="lastOrderedDate"
				title="Last Ordered Date"
			/>
			<YJImagePicker />
			<Button
				color="secondary"
				containerStyle={styles.submitBtnContainer}
				onPress={handleSubmit(onSubmit)}
			>
				Submit
			</Button>
		</YJHeader>
	);
};

export default AddYarnStock;

const useStyles = makeStyles(() => ({
	scrollViewContent: {
		marginHorizontal: 30,
		marginVertical: 40,
	},
	submitBtnContainer: {
		marginVertical: 20,
	},
}));
