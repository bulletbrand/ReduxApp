import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator/error-indicator'

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  }

//оно отловит ошибку так как обернет все компоненты и будет знать состояние через контекст
  componentDidCatch() {
    this.setState( {hasError:true } )
  }
  
  render() {
    if (this.state.hasError) {
       return <ErrorIndicator />
    }
    return this.props.children;//? типо если ошибки нет то пропс чилдрен это все компоненто бернткте в эту дич прочие
  }
}