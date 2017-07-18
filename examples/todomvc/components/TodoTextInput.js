import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Suggestions from './Suggestions';
import * as SuggestActions from '../actions/SuggestActions';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancelEdit: PropTypes.func,
    onTextChange: PropTypes.func,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
    suggestions: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleKeyDown(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    } else if (e.which === 27) {
      console.log('escape');
      if (this.props.onCancelEdit) {
        this.props.onCancelEdit();
      }
    }
    // This should probably just always happen when the text changes
    this.props.onTextChange('');
  }

  handleChange(e) {
    const text = e.target.value;
    this.setState({ text });
    this.handleChangeValue(text);
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  handleChangeValue(text) {
    this.props.onTextChange(text)
  }

  handleSelect(text) {
    this.props.onSave(text);
    this.setState({ text: '' });
    // This should probably just always happen when the text changes
    this.props.onTextChange('');
    this.textInput.focus();
  }

  handleUseText(text) {
    this.setState({ text });
  }

  render() {
    let suggestions;
    const isInputFocussed = document.activeElement === this.textInput;
    if (this.props.suggestions.length) {
      suggestions = (
        <Suggestions
          suggestions={this.props.suggestions}
          handleSelect={::this.handleSelect}
          handleUseText={::this.handleUseText}
        />
      )
    }
    return (
      <div className="TodoTextInput" style={{position: 'relative'}}>
        <input
          className={classnames({
          edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
          type='text'
          placeholder={this.props.placeholder}
          autoFocus='true'
          value={this.state.text}
          onBlur={::this.handleBlur}
          onChange={::this.handleChange}
          onKeyDown={::this.handleKeyDown}
          ref={(input) => { this.textInput = input; }}
        />
        {suggestions}
      </div>
    );
  }

}
