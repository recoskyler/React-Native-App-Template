import React, { useState } from "react";
import { View, StyleSheet, StatusBar, Dimensions, Text, ScrollView } from "react-native";
import { format } from "date-fns";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background
	},
	content: {
		paddingTop: screen.height * 0.2
	},
	textHeader: {
		color: colors.text,
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center",
		marginBottom: 20
	},
	text: {
		fontSize: 14,
		color: colors.text,
		textAlign: "center"
	}
});

export default () => {
	const [scrollEnabled, setScrollEnabled] = useState(false);
	const date = new Date();

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor={colors.background} />

			<ScrollView scrollEnabled={scrollEnabled}>
				<View style={styles.content}>
					<Text style={styles.textHeader}>React Native App</Text>

					<Text style={styles.text}>{`${format(new Date(date), "MMM do, yyyy")}`}</Text>

					<Button
						onPress={() => {
							alert("TODO");
						}}
						text="Button"
					/>

					<KeyboardSpacer style={null} onToggle={(visible: any) => setScrollEnabled(visible)} />
				</View>
			</ScrollView>
		</View>
	);
};
