import styled from 'styled-components'
import React from 'react';
import { Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Title = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.textDark || 'black'};
  text-align: center;
`

export const ContentText = styled.Text`
  font-size: 18px;
  color: ${props => props.color || 'white'};
	justify-content:center;
	margin-bottom: 8px;
	align-items: center;
`

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: ${props => props.color || 'white'};
`

export const CheeatahListText = ({ onPress, onLongPress, content, description }) => {
	const theme = useTheme();
	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? theme.colors.button : '#707070',
					paddingLeft: 16,
					paddingVertical: 16,
					alignContent: 'center',
					justifyContent: 'center'
				}
			]}
		>
			<ContentText>{content}</ContentText>
			<DescriptionText>{description}</DescriptionText>
		</Pressable >
	)
}