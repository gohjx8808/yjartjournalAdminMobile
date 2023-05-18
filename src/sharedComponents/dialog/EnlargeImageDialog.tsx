import { Icon, Image, Overlay, makeStyles } from "@rneui/themed";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, View } from "react-native";
import OutlineButton from "../button/OutlineButton";
import YJZoomView from "../layout/YJZoomView";

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
	const scale = useRef(new Animated.Value(1)).current;

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
			animationType="fade"
		>
			<View style={styles.imgContainer}>
				<YJZoomView scale={scale}>
					<Animated.Image
						source={{
							uri: imgUrl,
						}}
						resizeMode="contain"
						style={[styles.img, { transform: [{ scale }] }]}
					/>
				</YJZoomView>
			</View>
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
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
}));
