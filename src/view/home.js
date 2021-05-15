import React, { useState } from 'react';

import { Title, CheeatahListText } from '../style/text';
import { Container } from '../style/container';
import { CheetahInput } from '../style/input';
import { CheeatahButton } from '../style/button';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';

export default Home = () => {

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
			<CheeatahButton
				title="Add"
				onPress={(text) => addHero(text)}
			/>
			<FlatList
				data={superheroList}
				keyExtractor={(item) => item.id}
				style={{ width: '100%', marginTop: 20, paddingBottom: 10 }}
				ItemSeparatorComponent={() => <ListSeparator />}
				renderItem={({ item }) => (
					<CheeatahListText
						content={`Name: ${item.name}`}
						onLongPress={() => deleteHero(item.id)}
						description={`Power: ${item.power}`}
					/>
				)}
			/>
		</Container>
	);
}
