import { Image, makeStyles } from "@rneui/themed";
import { View } from "react-native";
import RoundedButton from "../../button/RoundedButton";
import ImagePickerOptionsDialog from "./ImagePickerOptionsDialog";
import { useState } from "react";
import {
	type CameraOptions,
	type ImageLibraryOptions,
	launchCamera,
	launchImageLibrary,
	type ImagePickerResponse,
} from "react-native-image-picker";

interface YJImagePickerProps {
	imgUrl?: string | null;
	onImageSelected: (image: ImagePickerResponse) => void;
}

const YJImagePicker = (props: YJImagePickerProps) => {
	const { imgUrl, onImageSelected } = props;
	const styles = useStyles();

	const [dialogOpen, setDialogOpen] = useState(false);

	const toggleDialog = () => {
		setDialogOpen(!dialogOpen);
	};

	const onCamera = async () => {
		const options: CameraOptions = {
			mediaType: "photo",
			includeBase64: true,
		};
		const photoTaken = await launchCamera(options);
		toggleDialog();

		onImageSelected(photoTaken);
	};

	const onLibrary = async () => {
		const options: ImageLibraryOptions = {
			mediaType: "photo",
			includeBase64: true,
			quality: 0.3,
			maxHeight: 480,
			maxWidth: 480,
		};
		const imageSelected = await launchImageLibrary(options);
		toggleDialog();

		onImageSelected(imageSelected);
	};

	return (
		<>
			<View style={styles.centerView}>
				{imgUrl !== undefined && imgUrl !== null ? (
					<Image
						source={{
							uri: imgUrl,
						}}
						containerStyle={styles.imgContainer}
					/>
				) : (
					<View style={[styles.emptyImgContainer, styles.imgContainer]} />
				)}
				<RoundedButton
					title="Upload Image"
					color="warning"
					containerStyle={styles.uploadBtn}
					onPress={toggleDialog}
				/>
			</View>
			<ImagePickerOptionsDialog
				visible={dialogOpen}
				hideDialog={toggleDialog}
				onCamera={onCamera}
				onLibrary={onLibrary}
			/>
		</>
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
