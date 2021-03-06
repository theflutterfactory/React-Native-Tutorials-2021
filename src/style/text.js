import styled from 'styled-components'

export const Title = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.textLight || 'black'};
  text-align: center;
  margin: 16px;
`

export const ContentText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.textLight || 'black'};
  margin: 16px;
`