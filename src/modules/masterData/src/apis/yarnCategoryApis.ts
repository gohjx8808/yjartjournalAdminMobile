import { getRequest, postRequest } from "../../../../helpers/apiUtils";

export const getAllYarnCategories = async () =>
	await getRequest<optionData[]>("/stocks/yarn-categories");

export const postAddYarnCategory = async (
	payload: masterData.addMasterDataPayload,
) => await postRequest("/stocks/yarn-categories/add-new", payload);

export const postUpdateYarnCategory = async (
	payload: masterData.updateMasterDataPayload,
) => await postRequest("/stocks/yarn-categories/update", payload);

export const postDeleteYarnCategory = async (
	payload: masterData.deleteMasterDataPayload,
) => await postRequest("/stocks/yarn-categories/delete", payload);
