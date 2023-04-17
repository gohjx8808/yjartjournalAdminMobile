import { getRequest, postRequest } from "../../../../helpers/apiUtils";

export const getAllYarnColorCategories = async () =>
	await getRequest<optionData[]>("/stocks/yarn-color-categories");

export const postUpdateYarnColorCategory = async (
	payload: masterData.updateMasterDataPayload,
) => await postRequest("/stocks/yarn-color-categories/update", payload);

export const postDeleteYarnColorCategory = async (
	payload: masterData.deleteMasterDataPayload,
) => await postRequest("/stocks/yarn-color-categories/delete", payload);
