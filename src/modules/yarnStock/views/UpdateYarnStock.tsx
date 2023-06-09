import { yupResolver } from "@hookform/resolvers/yup";
import { useRoute, type RouteProp } from "@react-navigation/native";
import { Button, makeStyles } from "@rneui/themed";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { convertUTCToMYT } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import ControlledDatePicker from "../../../sharedComponents/inputs/ControlledDatePicker";
import ControlledSelect from "../../../sharedComponents/inputs/ControlledSelect";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import YJImagePicker from "../../../sharedComponents/inputs/imagePicker/YJImagePicker";
import UpdateYarnStockSchema from "../../../validationSchemas/UpdateYarnStockSchema";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../../masterData/src/queries/masterDataQueries";
import type { YarnStockNavigatorParamList } from "../../router/MainRouter";
import type routeNames from "../../router/routeNames";
import { useUpdateYarnStock } from "../src/queries/yarnStockMutations";
import { type ImagePickerResponse } from "react-native-image-picker";

const UpdateYarnStock = () => {
	const styles = useStyles();
	const { params } =
		useRoute<
			RouteProp<YarnStockNavigatorParamList, routeNames.UPDATE_YARN_STOCK>
		>();

	const [imageSelectedBase64, setImageSelectedBase64] =
		useState<ImagePickerResponse | null>(null);
	const [isImageUpdated, setIsImageUpdated] = useState(false);
	const [imgUrl, setImgUrl] = useState<string | null>(null);

	const {
		control,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm<yarnStock.addEditYarnStockPayload>({
		resolver: yupResolver(UpdateYarnStockSchema),
	});

	useEffect(() => {
		setImgUrl(
			imageSelectedBase64?.assets?.[0].uri ?? params.stockData.imageUrl,
		);
	}, [imageSelectedBase64, params.stockData]);

	useEffect(() => {
		const stockData = params.stockData;
		reset({
			...stockData,
			cost: stockData.costPerItem.toString(),
			reorderLevel: stockData.reorderLevel.toString(),
		});
		if (
			stockData.lastOrderedAt !== undefined &&
			stockData.lastOrderedAt !== null
		) {
			setValue("lastOrderedDate", new Date(stockData.lastOrderedAt));
		}
	}, [params.stockData]);

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();
	const { mutate: submitUpdate, isLoading: updateLoading } =
		useUpdateYarnStock();

	const onSubmit: SubmitHandler<
		yarnStock.addEditYarnStockPayload
	> = formData => {
		let stockImg = null;
		if (imageSelectedBase64?.assets?.[0].base64 !== undefined) {
			stockImg = `data:image/png;base64,${imageSelectedBase64.assets[0].base64}`;
		}
		submitUpdate({
			...formData,
			yarnId: params.stockData.id,
			lastOrderedDate: convertUTCToMYT(formData.lastOrderedDate),
			image: {
				base64Data: stockImg,
				isUpdated: isImageUpdated,
			},
		});
	};

	const onSelectImage = (response: ImagePickerResponse) => {
		if (response.didCancel === true) {
			if (imageSelectedBase64 === null) {
				setIsImageUpdated(false);
			}
		} else {
			setIsImageUpdated(true);
			setImageSelectedBase64(response);
		}
	};

	const onRemoveImage = () => {
		setImgUrl(null);
		setImageSelectedBase64(null);
		if (params.stockData.imageUrl !== null) {
			setIsImageUpdated(true);
		} else {
			setIsImageUpdated(false);
		}
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
			<YJImagePicker
				imgUrl={imgUrl}
				onImageSelected={onSelectImage}
				onRemoveImage={onRemoveImage}
			/>
			<Button
				color="secondary"
				containerStyle={styles.submitBtnContainer}
				onPress={handleSubmit(onSubmit)}
				loading={updateLoading}
				disabled={updateLoading}
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
