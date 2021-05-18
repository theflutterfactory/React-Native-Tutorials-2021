import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/view/home';
import ListScreen from './src/view/ListScreen';
import { ThemeProvider } from 'styled-components';

const Stack = createStackNavigator();

const theme = {
	colors: {
		dark: '#050505',
		light: '#F5F1E3',
		button: '#1B9AAA',
		textLight: '#FFFFFF',
		textDark: '#4E598C',
		input: '#DDDBCB',
	}
}

export default App = () =>
	<ThemeProvider theme={theme}>
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{
					cardStyle: { backgroundColor: theme.colors.light }
				}}>
				<Stack.Screen
					name="Cheeatah Coding"
					component={Home}
					options={{
						headerTintColor: theme.colors.textLight,
						headerStyle: { backgroundColor: theme.colors.dark },
					}}
				/>
				<Stack.Screen
					name="List"
					component={ListScreen}
					options={{
						headerTintColor: theme.colors.textLight,
						headerStyle: { backgroundColor: theme.colors.dark }
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</ThemeProvider>