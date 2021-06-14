import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Observer} from 'mobx-react';

import {superheroStore} from '../store/superheroes';
import {CheeatahListText} from '../style/text';
import {ListSeparator} from '../style/separator';
import {Title} from '../style/text';
import {Container, RowContainer} from '../style/container';
import {CheetahInput} from '../style/input';
import {CheeatahButton} from '../style/button';

export default Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [power, setPower] = useState('');

  console.log('* reloading screen...');

  addHero = () => {
    setHeroList((list) => [...list, {name, power, id: Math.random()}]);
  };

  return (
    <Container>
      <Title>Superheroes</Title>
      <CheetahInput hint="Name" onChangeText={(text) => setName(text)} />
      <CheetahInput hint="Power" onChangeText={(text) => setPower(text)} />
      <RowContainer>
        <CheeatahButton
          title="Add"
          onPress={(text) => superheroStore.addHero({name, power})}
          marginRight={12}
        />
        <CheeatahButton
          title="View List"
          onPress={() => navigation.navigate('List')}
        />
      </RowContainer>

      <Observer>
        {() => (
          <FlatList
            data={superheroStore.superheroes}
            keyExtractor={(item) => item.id}
            style={{width: '100%', marginTop: 20, paddingBottom: 10}}
            ItemSeparatorComponent={() => <ListSeparator />}
            renderItem={({item}) => (
              <CheeatahListText
                content={`Name: ${item.name}`}
                onLongPress={() => superheroStore.deleteHero(item.id)}
                description={`Power: ${item.power}`}
              />
            )}
          />
        )}
      </Observer>
    </Container>
  );
};
