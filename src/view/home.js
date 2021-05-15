import React, { useState } from 'react';

import { Title, ContentText } from '../style/text';
import { Container } from '../style/container';
import { CheetahInput } from '../style/input';
import { FlatList } from 'react-native';

export default Home = () => {

	const [value, onChangeText] = useState('Useless Multiline Placeholder');

	return (
		<Container>
			<Title>Superheroes</Title>
			<CheetahInput
				hint='Name'
			/>
			<CheetahInput
				hint='Power'
			/>
			<FlatList
				data={[{ title: 'a' }, { title: 'b' }, { title: 'c' }]}
				renderItem={({ item }) => <ContentText>{item.title}</ContentText>}
				keyExtractor={(item) => item.title}
			/>
		</Container>
	);
}
