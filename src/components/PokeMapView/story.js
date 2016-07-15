import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import PokeMapView from './'

const stories = storiesOf('PokeMapView', module)

stories.add('default view', function () {
  return <PokeMapView />
})

stories.add('with alerts', function () {
  const alerts = [
    {pokemon: 'Rattata', latitude: 7.214000, longitude: 79.838100},
    {pokemon: 'Rattata', latitude: 7.212000, longitude: 79.836100},
    {pokemon: 'Magicarp', latitude: 7.216000, longitude: 79.836000}
  ];
  return <PokeMapView alerts={alerts} />
})
