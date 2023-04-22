import type { Control, FieldErrors } from "react-hook-form";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";

interface YarnStockSharedInputsProps {
	control: Control<yarnStock.addYarnStockPayload>;
	errors: FieldErrors<yarnStock.addYarnStockPayload>;
}

const YarnStockSharedInputs = (props: YarnStockSharedInputsProps) => {
	const { control, errors } = props;
	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	return (
		<>
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
		</>
	);
};

export default YarnStockSharedInputs;
