import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import HelloWorld from './'

const stories = storiesOf('HelloWorld', module)

stories.add('default view', function () {
  return <HelloWorld />
})

stories.add('custom text', function () {
  return <HelloWorld text={'Hello Earth'} />
})
