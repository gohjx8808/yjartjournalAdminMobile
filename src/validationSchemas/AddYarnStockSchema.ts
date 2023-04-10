import { number, object, string } from "yup";

const AddYarnStockSchema = object({
	detailedColor: string()
		.typeError("Invalid detailed color.")
		.required("Detailed color is required."),
	cost: number().typeError("Invalid cost.").required("Cost is required."),
	quantity: number()
		.integer("Quantity must be an integer.")
		.typeError("Invalid quantity.")
		.required("Quantity is required."),
	reorderLevel: number()
		.integer("Reorder level must be an integer.")
		.typeError("Invalid reorder level.")
		.required("Reorder level is required."),
});

export default AddYarnStockSchema;
