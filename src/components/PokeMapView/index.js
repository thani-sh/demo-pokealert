import React from 'react'
import { MapView } from 'react-native'
import style from './style'
import MARKER_IMAGE from './assets/marker.png'

export default class PokeMapView extends React.Component {
  static propTypes = {
    alerts: React.PropTypes.array
  }

  static defaultProps = {
    alerts: []
  }

  getAnnotations() {
    return this.props.alerts.map(alert => {
      return {
        image: MARKER_IMAGE,
        title: `A wild ${alert.pokemon} appeard here!`,
        latitude: alert.latitude,
        longitude: alert.longitude,
      }
    })
  }

  render() {
    return (
      <MapView
        style={style.mapview}
        annotations={this.getAnnotations()}
        showsUserLocation={true}
        followUserLocation={true}
      />
    );
  }
}
