import { postRequest } from "../../../helpers/apiUtils";

export const postSignIn = async (payload: auth.signInPayload) =>
	await postRequest<auth.signInResponse>("/users/sign-in", payload, false);
