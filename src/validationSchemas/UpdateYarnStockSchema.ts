import { number, object, string } from "yup";

const UpdateYarnStockSchema = object({
	detailedColor: string()
		.typeError("Invalid detailed color.")
		.required("Detailed color is required."),
	cost: number().typeError("Invalid cost.").required("Cost is required."),
	reorderLevel: number()
		.integer("Reorder level must be an integer.")
		.typeError("Invalid reorder level.")
		.required("Reorder level is required."),
	yarnCategory: object({
		id: number()
			.integer("Yarn category id must be an integer.")
			.typeError("Invalid yarn category id.")
			.required("Yarn category is required."),
		name: string()
			.typeError("Invalid yarn category name.")
			.required("Yarn category is required."),
	}),
	yarnColorCategory: object({
		id: number()
			.integer("Yarn color category id must be an integer.")
			.typeError("Invalid yarn color category id.")
			.required("Yarn color category is required."),
		name: string()
			.typeError("Invalid yarn color category name.")
			.required("Yarn color category is required."),
	}),
});

export default UpdateYarnStockSchema;
