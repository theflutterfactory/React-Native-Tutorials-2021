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
            This is the master branch. As you can see, there's not much here.
            This branch uses two libraries that will be used in all future videos.{"\n"}{"\n"}
            - React Navigation{"\n"}
            - Styled Components{"\n"}{"\n"}
            If you're not familiar with either of these powerful packages, checkout the React Navigation
            and Styled Components videos I uploaded on the channel.
        </ContentText>
    </Container>
