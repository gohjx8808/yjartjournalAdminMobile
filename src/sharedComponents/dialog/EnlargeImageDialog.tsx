import { Icon, Image, Overlay, makeStyles } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import OutlineButton from "../button/OutlineButton";

interface imageDimensionData {
	width: number;
	height: number;
}

interface EnlargeImageDialogProps extends dialogProps.commonDialogProps {
	imgUrl: string;
}

const EnlargeImageDialog = (props: EnlargeImageDialogProps) => {
	const { visible, hideDialog, imgUrl } = props;
	const [imageDimension, setImageDimension] = useState<imageDimensionData>({
		width: 0,
		height: 0,
	});

	const styles = useStyles(imageDimension);

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
		>
			<Image
				source={{
					uri: imgUrl,
				}}
				containerStyle={styles.imgContainer}
				resizeMode="contain"
				style={styles.img}
			/>
			<OutlineButton buttonStyle={styles.closeBtn} onPress={hideDialog}>
				<Icon name="close" color="white" />
			</OutlineButton>
		</Overlay>
	);
};

export default EnlargeImageDialog;

const useStyles = makeStyles((_theme, imageDimension: imageDimensionData) => ({
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
	img: {
		width: imageDimension.width,
		height: imageDimension.height,
		maxWidth: Dimensions.get("screen").width,
	},
	imgContainer: {
		maxWidth: Dimensions.get("screen").width,
	},
}));
