import styled from 'styled-components'
import React from 'react';

const RoundedTouchableOpacity = styled.TouchableOpacity`
	flex: 1;
  height: 48px;
  justify-content: center;
	border-radius: 10px;
  background-color: ${props => props.theme.colors.button || 'red'};
	margin-right: ${props => props.marginRight || 0}px;
	margin-left: ${props => props.marginLeft || 0};
  margin-top: 24px;
	box-shadow: 3px 2px 5px #a6a6a6;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textLight || 'white'};
  font-size: ${props => props.size || '16px'};
	text-align: center;
`

export const CheeatahButton = ({ onPress, title, fontSize, marginLeft, marginRight }) =>
	<RoundedTouchableOpacity
		onPress={onPress}
		marginLeft={marginLeft}
		marginRight={marginRight}
	>
		<ButtonText size={fontSize}>{title}</ButtonText>
	</RoundedTouchableOpacity>