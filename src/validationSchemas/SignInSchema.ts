import { object, string } from "yup";

const SignInSchema = object({
	email: string().required("Email is required.").email("Invalid email."),
	password: string().required("Password is required."),
});

export default SignInSchema;
