import { AppRegistry } from 'react-native'
import * as storybook from '@kadira/react-native-storybook'

storybook.configure(function () {
  require('./src/components/HelloWorld/story')
  require('./src/components/PokeMapPage/story')
  require('./src/components/PokeMapView/story')
  require('./src/components/SubmitButton/story')
}, module)

AppRegistry.registerComponent('pokealert', function () {
  return storybook.getStorybookUI({
    port: 9001,
    host: 'localhost',
  })
})
