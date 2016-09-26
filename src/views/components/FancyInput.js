import React from 'react'

import './FancyInput.css'

export default class FancyInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputFocused: false,
      hasText: false
    }
  }

  _onInputFocus () {
    this.setState({inputFocused: true})
  }

  _onInputBlur () {
    this.setState({inputFocused: false})
  }

  _onInputChange (text) {
    this.setState({hasText: Boolean(text.length) })
    this.props.onChange(text)
  }

  render () {
    const focused = "focused"
    let labelClassNames = ["fi-label"]
    let inputClassNames = ["fi-input"]
    let placeholder = ""

    if (this.state.inputFocused || this.state.hasText) {
      labelClassNames = [...labelClassNames, focused]
      inputClassNames = [...inputClassNames, focused]
    }

    if (this.state.inputFocused && !this.state.hasText) {
      placeholder = this.props.placeholder
    }

    return (
      <div className="fi">
        <input
          id={this.props.htmlId}
          type={this.props.type}
          placeholder={placeholder}
          className={inputClassNames.join(' ')}
          onChange={(e) => this._onInputChange(e.target.value)}
          onFocus={() => this._onInputFocus()}
          onBlur={() => this._onInputBlur()}
        />
        <label htmlFor={this.props.htmlId} className={labelClassNames.join(' ')}>{this.props.label}
        </label>
      </div>
    )
  }
}
