import React from 'react'
import { storiesOf, action } from '@kadira/react-native-storybook'
import PokeMapPage from './'

const stories = storiesOf('PokeMapPage', module)

stories.add('default view', function () {
  return <PokeMapPage />
})

stories.add('with alerts', function () {
  const alerts = [
    {pokemon: 'Rattata', latitude: 7.214000, longitude: 79.838100},
    {pokemon: 'Rattata', latitude: 7.212000, longitude: 79.836100},
    {pokemon: 'Magicarp', latitude: 7.216000, longitude: 79.836000}
  ];
  return <PokeMapPage alerts={alerts} />
})

stories.add('submit action', function () {
  return <PokeMapPage onSubmit={action('submit')} />
})
