import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, makeStyles } from "@rneui/themed";
import { useForm } from "react-hook-form";
import { Platform, ScrollView, View } from "react-native";
import {
	type EdgeInsets,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import SignInSchema from "../../../validationSchemas/SignInSchema";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import ControlledPasswordInput from "../../../sharedComponents/inputs/ControlledPasswordInput";

const SignIn = () => {
	const insets = useSafeAreaInsets();
	const styles = useStyles(insets);

	const {
		control,
		formState: { errors },
	} = useForm({ resolver: yupResolver(SignInSchema) });

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContainer}
			contentInsetAdjustmentBehavior="automatic"
			contentInset={{ bottom: insets.bottom }}
		>
			<Card>
				<Card.Title style={{ fontSize: 20 }}>YJArtJournal Admin</Card.Title>
				<Card.Divider />
				<Card.Image
					style={{ height: 100, width: 100 }}
					containerStyle={{ alignSelf: "center" }}
					source={require("../../../images/favicon.png")}
				/>
				<View style={styles.contentView}>
					<ControlledTextInput
						control={control}
						label="Email"
						name="email"
						autoCapitalize="none"
						errorMessage={errors.email?.message}
					/>
					<ControlledPasswordInput
						control={control}
						label="Password"
						name="password"
						autoCapitalize="none"
						errorMessage={errors.email?.message}
					/>
				</View>
				<Button title="Sign In" titleStyle={styles.submitBtn} />
			</Card>
		</ScrollView>
	);
};

export default SignIn;

const useStyles = makeStyles((theme, insets: EdgeInsets) => ({
	scrollViewContainer: {
		paddingBottom: Platform.OS === "android" ? 50 + insets.bottom : 0,
		marginTop: "40%",
	},
	submitBtn: {
		color: theme.colors.secondary,
	},
	contentView: {
		marginTop: 20,
		marginBottom: 10,
	},
}));
