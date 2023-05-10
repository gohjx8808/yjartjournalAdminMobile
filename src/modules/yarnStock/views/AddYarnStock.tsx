import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@rneui/themed";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { convertUTCToMYT } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import YJImagePicker from "../../../sharedComponents/inputs/imagePicker/YJImagePicker";
import AddYarnStockSchema from "../../../validationSchemas/AddYarnStockSchema";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";
import { useAddYarnStock } from "../src/queries/yarnStockMutations";
import { useState } from "react";
import { type ImagePickerResponse } from "react-native-image-picker";

const AddYarnStock = () => {
	const styles = useStyles();
	const [imageSelectedBase64, setImageSelectedBase64] =
		useState<ImagePickerResponse | null>(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<yarnStock.addYarnStockPayload>({
		resolver: yupResolver(AddYarnStockSchema),
	});

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();
	const { mutate: addYarnStock, isLoading: addLoading } = useAddYarnStock();

	const onSubmit: SubmitHandler<yarnStock.addYarnStockPayload> = formData => {
		let stockImg = null;
		if (imageSelectedBase64?.assets?.[0].base64 !== undefined) {
			stockImg = `data:image/png;base64,${imageSelectedBase64.assets[0].base64}`;
		}
		addYarnStock({
			...formData,
			lastOrderedDate: convertUTCToMYT(formData.lastOrderedDate),
			image: stockImg,
		});
	};

	const onSelectImage = (response: ImagePickerResponse) => {
		if (!(response.didCancel === true)) {
			setImageSelectedBase64(response);
		}
	};

	const onRemoveImage = () => {
		setImageSelectedBase64(null);
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
			<YJImagePicker
				onImageSelected={onSelectImage}
				onRemoveImage={onRemoveImage}
				imgUrl={imageSelectedBase64?.assets?.[0].uri}
			/>
			<Button
				color="secondary"
				containerStyle={styles.submitBtnContainer}
				onPress={handleSubmit(onSubmit)}
				loading={addLoading}
				disabled={addLoading}
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
