import React, { useState } from 'react';

import { Title, CheeatahListText } from '../style/text';
import { Container, RowContainer } from '../style/container';
import { CheetahInput } from '../style/input';
import { CheeatahButton } from '../style/button';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';

export default Home = ({ navigation }) => {

	const [superheroList, setHeroList] = useState([]);
	const [name, setName] = useState('');
	const [power, setPower] = useState('');

	addHero = () => {
		setHeroList(list => [...list, { name, power, id: Math.random() }])
	}

	deleteHero = (id) => {
		let filteredHeroes = superheroList.filter(hero => hero.id !== id)
		setHeroList(filteredHeroes)
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
