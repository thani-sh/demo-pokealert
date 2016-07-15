import React from 'react'
import { View } from 'react-native'
import PokeMapView from '../PokeMapView'
import SubmitButton from '../SubmitButton'
import style from './style'

export default class PokeMapPage extends React.Component {
  static propTypes = {
    alerts: PokeMapView.propTypes.alerts,
    onSubmit: SubmitButton.propTypes.onSubmit
  }

  render() {
    return (
      <View style={style.wrapper}>
        <PokeMapView alerts={this.props.alerts} />
        <SubmitButton onSubmit={this.props.onSubmit} />
      </View>
    )
  }
}
