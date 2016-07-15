import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default class HelloWorld extends React.Component {
  static propTypes = {
    text: React.PropTypes.string
  }

  static defaultProps = {
    text: 'Hello World'
  }

  render() {
    return (
      <View style={style.wrapper}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
