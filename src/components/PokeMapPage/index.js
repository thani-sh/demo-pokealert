import React from 'react'
import { View } from 'react-native'
import Button from 'apsl-react-native-button'
import PokeMapView from '../PokeMapView'
import style from './style'

export default class PokeMapPage extends React.Component {
  static propTypes = {
    alerts: PokeMapView.propTypes.alerts,
    onSubmit: React.PropTypes.func
  }

  static defaultProps = {
    onSubmit: new Function()
  }

  render() {
    return (
      <View style={style.wrapper}>
        <PokeMapView alerts={this.props.alerts} />
        <Button style={style.button} onPress={this.props.onSubmit}>submit</Button>
      </View>
    )
  }
}
