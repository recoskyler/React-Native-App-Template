/* eslint-disable react/jsx-indent */
/* eslint-disable import/extensions */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
	<MainStack.Navigator>
		<MainStack.Screen name="Home" component={Home} />
	</MainStack.Navigator>
);

export default () => (
	<NavigationContainer>
		<MainStackScreen />
	</NavigationContainer>
);

// TODO Import other screens and uncomment the code above to configure Navigation
