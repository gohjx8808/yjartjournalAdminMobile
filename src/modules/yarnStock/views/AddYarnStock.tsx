import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@rneui/themed";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { convertUTCToMYT } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import AddYarnStockSchema from "../../../validationSchemas/AddYarnStockSchema";
import { useAddYarnStock } from "../src/queries/yarnStockMutations";
import YarnStockSharedInputs from "./YarnStockSharedInputs";

const AddYarnStock = () => {
	const styles = useStyles();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<yarnStock.addYarnStockPayload>({
		resolver: yupResolver(AddYarnStockSchema),
	});

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
			<YarnStockSharedInputs control={control} errors={errors} />
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

const useStyles = makeStyles(theme => ({
	scrollViewContent: {
		marginHorizontal: 20,
		marginVertical: 40,
	},
	submitBtnContainer: {
		marginVertical: 20,
	},
}));
