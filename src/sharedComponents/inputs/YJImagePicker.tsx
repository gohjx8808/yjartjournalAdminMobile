import { Image, makeStyles } from "@rneui/themed";
import { View } from "react-native";
import RoundedButton from "../button/RoundedButton";

interface YJImagePickerProps {
	imgUrl?: string | null;
}

const YJImagePicker = (props: YJImagePickerProps) => {
	const { imgUrl } = props;

	const styles = useStyles();

	return (
		<View style={styles.centerView}>
			{imgUrl !== undefined && imgUrl !== null ? (
				<Image source={{ uri: imgUrl }} containerStyle={styles.imgContainer} />
			) : (
				<View style={[styles.emptyImgContainer, styles.imgContainer]} />
			)}
			<RoundedButton
				title="Upload Image"
				color="warning"
				containerStyle={styles.uploadBtn}
			/>
		</View>
	);
};

export default YJImagePicker;

const useStyles = makeStyles(theme => ({
	centerView: {
		alignItems: "center",
	},
	uploadBtn: {
		width: "50%",
	},
	emptyImgContainer: {
		backgroundColor: theme.colors.white,
	},
	imgContainer: {
		height: 300,
		width: "95%",
		borderColor: theme.colors.secondary,
		borderWidth: 0.5,
		marginBottom: 20,
		marginTop: 10,
	},
}));
