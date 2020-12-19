import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
		backgroundColor: colors.text,
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderRadius: 8
	},
	buttonIcon: {
		marginRight: 10,
		width: 20,
		height: 20
	},
	buttonText: {
		fontSize: 16,
		color: colors.background
	}
});

export const Button = ({ onPress, text = "Button" }: { onPress: any; text: any }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Image source={require("../assets/images/reverse.png")} style={styles.buttonIcon} resizeMode="contain" />
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};
