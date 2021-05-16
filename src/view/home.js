import React, { useState } from 'react';

import { Title } from '../style/text';
import { Container, RowContainer } from '../style/container';
import { CheetahInput } from '../style/input';
import { CheeatahButton } from '../style/button';

export default Home = ({ navigation }) => {

	const [superheroList, setHeroList] = useState([]);
	const [name, setName] = useState('');
	const [power, setPower] = useState('');

	addHero = () => {
		setHeroList(list => [...list, { name, power, id: Math.random() }])
	}

	return (
		<Container>
			<Title>Superheroes</Title>
			<CheetahInput
				hint='Name'
				onChangeText={text => setName(text)}
			/>
			<CheetahInput
				hint='Power'
				onChangeText={text => setPower(text)}
			/>
			<RowContainer>
				<CheeatahButton
					title="Add"
					onPress={(text) => addHero(text)}
					marginRight={12}
				/>
				<CheeatahButton
					title="View List"
					onPress={() => navigation.navigate('List', {
						list: superheroList,
					})}
				/>
			</RowContainer>
		</Container>
	);
}
