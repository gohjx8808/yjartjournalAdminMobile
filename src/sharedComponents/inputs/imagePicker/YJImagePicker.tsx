import { Icon, Image, makeStyles } from "@rneui/themed";
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
import ClearButton from "../../button/ClearButton";
import RemoveImageDialog from "./RemoveImageDialog";

interface YJImagePickerProps {
	imgUrl?: string | null;
	onImageSelected: (image: ImagePickerResponse) => void;
	onRemoveImage: () => void;
}

const YJImagePicker = (props: YJImagePickerProps) => {
	const { imgUrl, onImageSelected, onRemoveImage } = props;
	const styles = useStyles();

	const [optionsDialogOpen, setOptionsDialogOpen] = useState(false);
	const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

	const toggleOptionsDialog = () => {
		setOptionsDialogOpen(!optionsDialogOpen);
	};

	const pictureOptions: CameraOptions | ImageLibraryOptions = {
		mediaType: "photo",
		includeBase64: true,
		quality: 0.3,
		maxHeight: 480,
		maxWidth: 480,
	};

	const onCamera = async () => {
		const photoTaken = await launchCamera(pictureOptions);
		if (!(photoTaken.didCancel === true)) {
			toggleOptionsDialog();
		}

		onImageSelected(photoTaken);
	};

	const onLibrary = async () => {
		const imageSelected = await launchImageLibrary(pictureOptions);
		if (!(imageSelected.didCancel === true)) {
			toggleOptionsDialog();
		}
		onImageSelected(imageSelected);
	};

	const toggleRemoveDialog = () => {
		setRemoveDialogOpen(!removeDialogOpen);
	};

	const onConfirmRemove = () => {
		onRemoveImage();
		toggleRemoveDialog();
	};

	return (
		<>
			<View style={styles.centerView}>
				{imgUrl !== undefined && imgUrl !== null ? (
					<View style={styles.imgRootContainer}>
						<Image
							source={{
								uri: imgUrl,
							}}
							containerStyle={styles.imgContainer}
						>
							<ClearButton
								containerStyle={styles.removeBtnContainer}
								onPress={toggleRemoveDialog}
							>
								<Icon name="close" />
							</ClearButton>
						</Image>
					</View>
				) : (
					<View style={[styles.emptyImgContainer, styles.imgContainer]} />
				)}
				<RoundedButton
					title="Upload Image"
					color="warning"
					containerStyle={styles.uploadBtn}
					onPress={toggleOptionsDialog}
				/>
			</View>
			<ImagePickerOptionsDialog
				visible={optionsDialogOpen}
				hideDialog={toggleOptionsDialog}
				onCamera={onCamera}
				onLibrary={onLibrary}
			/>
			<RemoveImageDialog
				visible={removeDialogOpen}
				hideDialog={toggleRemoveDialog}
				onConfirm={onConfirmRemove}
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
	removeBtnContainer: {
		position: "absolute",
		right: 10,
		top: 10,
		backgroundColor: theme.colors.white,
		borderRadius: 30,
		opacity: 0.5,
	},
	imgRootContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
}));
