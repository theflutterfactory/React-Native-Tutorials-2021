import React from 'react';

import { CheeatahListText } from '../style/text';
import { Container } from '../style/container';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';

export default ListScreen = ({ route, theme }) => {
	return (
		<Container>
			<FlatList
				data={route.params.list}
				keyExtractor={(item) => item.id}
				style={{ width: '100%', marginTop: 20, paddingBottom: 10 }}
				ItemSeparatorComponent={() => <ListSeparator />}
				renderItem={({ item }) => (
					<CheeatahListText
						content={`Name: ${item.name}`}
						theme={theme}
						onLongPress={() => deleteHero(item.id)}
						description={`Power: ${item.power}`}
					/>
				)}
			/>
		</Container>
	);
}
