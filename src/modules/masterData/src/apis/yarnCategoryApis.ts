import { getRequest } from "../../../../helpers/apiUtils";

export const getAllYarnCategories = async () =>
	await getRequest<optionData[]>("/stocks/yarn-categories");
