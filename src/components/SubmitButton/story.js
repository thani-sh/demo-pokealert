import React from 'react'
import { action, storiesOf } from '@kadira/react-native-storybook'
import SubmitButton from './'

const stories = storiesOf('SubmitButton', module)

stories.add('default view', function () {
  return <SubmitButton />
})

stories.add('submit action', function () {
  return <SubmitButton onSubmit={action('submit')} />
})
