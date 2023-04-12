import { getRequest } from "../../../../helpers/apiUtils";

export const getAllYarnColorCategories = async () =>
	await getRequest<optionData[]>("/stocks/yarn-color-categories");
