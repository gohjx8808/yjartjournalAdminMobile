import { Icon, Image, Overlay, makeStyles } from "@rneui/themed";
import { useEffect, useState } from "react";
import { View } from "react-native";
import OutlineButton from "../button/OutlineButton";
import YJZoomableImage from "../layout/YJZoomableImage";

interface EnlargeImageDialogProps extends dialogProps.commonDialogProps {
	imgUrl: string;
}

const EnlargeImageDialog = (props: EnlargeImageDialogProps) => {
	const { visible, hideDialog, imgUrl } = props;
	const [imageDimension, setImageDimension] =
		useState<dialogProps.imageDimensionData>({
			width: 0,
			height: 0,
		});
	const styles = useStyles();

	useEffect(() => {
		Image.getSize(imgUrl, (width, height) => {
			setImageDimension({ width, height });
		});
	}, [imgUrl]);

	return (
		<Overlay
			overlayStyle={styles.overlay}
			isVisible={visible}
			onBackdropPress={hideDialog}
			backdropStyle={styles.solidBackdrop}
			animationType="fade"
		>
			<View style={styles.imgContainer}>
				<YJZoomableImage
					source={{ uri: imgUrl }}
					resizeMode="contain"
					imageDimension={imageDimension}
				/>
			</View>
			<OutlineButton buttonStyle={styles.closeBtn} onPress={hideDialog}>
				<Icon name="close" color="white" />
			</OutlineButton>
		</Overlay>
	);
};

export default EnlargeImageDialog;

const useStyles = makeStyles(() => ({
	overlay: {
		backgroundColor: "transparent",
		alignItems: "center",
	},
	solidBackdrop: {
		backgroundColor: "black",
	},
	closeBtn: {
		borderRadius: 50,
		width: "50%",
		borderWidth: 1.5,
	},
	imgContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
}));
