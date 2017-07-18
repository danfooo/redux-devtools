import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import * as SuggestActions from '../actions/SuggestActions';

class TodoApp extends Component {
  render() {
    const { todos, suggestions, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} suggestions={suggestions} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos,
    suggestions: state.suggestions,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({...TodoActions, ...SuggestActions}, dispatch)
  };

}

export default connect(mapState, mapDispatch)(TodoApp);
