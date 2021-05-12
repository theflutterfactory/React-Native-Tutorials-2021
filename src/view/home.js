import React from 'react';

import { Title, ContentText } from '../style/text';
import { Container } from '../style/container';
import { CustomImage } from '../style/image'

export default Home = () =>
    <Container>
        <CustomImage
            source={require('../assets/cc_logo.png')}
        />
        <Title>Cheeatah Coding 2021</Title>
        <ContentText>
            This is the master branch. As you can you, there's not much here.
            This branch uses Styled Components. Styled Components is a very useful tool to add to your toolbox.
            If you're not familiar with that library, checkout the Styled Components video on the channel.
        </ContentText>
    </Container>
