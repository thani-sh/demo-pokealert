import React from 'react'
import Button from 'apsl-react-native-button'
import style from './style'

export default class SubmitButton extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func
  }

  static defaultProps = {
    onSubmit: new Function()
  }

  render() {
    return (
      <Button
        style={style.button}
        textStyle={style.buttonText}
        onPress={this.props.onSubmit}>
        submit
      </Button>
    )
  }
}
