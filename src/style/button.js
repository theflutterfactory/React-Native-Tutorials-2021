import styled from 'styled-components'
import React from 'react';

const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 48px;
  width: ${props => props.width || '100%'};
  justify-content: center;
	border-radius: 10px;
  align-items: center;
  background-color: ${props => props.theme.colors.button || 'red'};
  margin-top: 24px;
	box-shadow: 3px 2px 5px #a6a6a6;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textLight || 'white'};
  font-size: ${props => props.size || '16px'};
`

export const CheeatahButton = ({ onPress, title, fontSize, width }) =>
	<RoundedTouchableOpacity
		onPress={onPress}
		width={width}
	>
		<ButtonText size={fontSize}>{title}</ButtonText>
	</RoundedTouchableOpacity>