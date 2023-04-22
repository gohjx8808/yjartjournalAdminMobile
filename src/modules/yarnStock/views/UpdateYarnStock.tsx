import { yupResolver } from "@hookform/resolvers/yup";
import { useRoute, type RouteProp } from "@react-navigation/native";
import { Button, makeStyles } from "@rneui/themed";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import AddYarnStockSchema from "../../../validationSchemas/AddYarnStockSchema";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";
import type { YarnStockNavigatorParamList } from "../../router/MainRouter";
import type routeNames from "../../router/routeNames";

const UpdateYarnStock = () => {
	const styles = useStyles();
	const { params } =
		useRoute<
			RouteProp<YarnStockNavigatorParamList, routeNames.UPDATE_YARN_STOCK>
		>();

	const {
		control,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm<yarnStock.updateYarnStockPayload>({
		resolver: yupResolver(AddYarnStockSchema),
	});

	useEffect(() => {
		const stockData = params.stockData;
		reset({
			...stockData,
			cost: stockData.costPerItem.toString(),
			reorderLevel: stockData.reorderLevel.toString(),
		});
		if (stockData.lastOrderedAt !== undefined) {
			setValue("lastOrderedDate", new Date(stockData.lastOrderedAt));
		}
	}, [params.stockData]);

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	const onSubmit: SubmitHandler<
		yarnStock.updateYarnStockPayload
	> = formData => {
		// addYarnStock({
		// 	...formData,
		// 	lastOrderedDate: convertUTCToMYT(formData.lastOrderedDate),
		// });
	};

	return (
		<YJHeader
			title="Update Yarn Stock"
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

export default UpdateYarnStock;

const useStyles = makeStyles(() => ({
	scrollViewContent: {
		marginHorizontal: 20,
		marginVertical: 40,
	},
	submitBtnContainer: {
		marginVertical: 20,
	},
}));
