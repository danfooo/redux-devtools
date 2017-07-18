import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputContainer from '../containers/TextInputContainer';
import * as TodoActions from '../actions/TodoActions';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    suggestions: PropTypes.array.isRequired,
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
          <h1>todos</h1>
          <TextInputContainer
            newTodo={true}
            onSave={::this.handleSave}
            placeholder='What needs to be packed?' />
      </header>
    );
  }
}
