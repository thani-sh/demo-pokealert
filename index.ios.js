import { AppRegistry } from 'react-native'
import * as storybook from '@kadira/react-native-storybook'

storybook.configure(function () {
  // ...
}, module)

AppRegistry.registerComponent('pokealert', function () {
  return storybook.getStorybookUI({
    port: 9001,
    host: 'localhost',
  })
})
