import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTextInput from '../components/TodoTextInput';

class TextInputContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      suggestions: []
    };
  }

  onTextChange(text) {
    const allSuggestions = this.props.suggestions;

    const getSuggestions = (text) => {
      if (!text) {
        return [];
      }

      // Matching items will be ranked.
      // Items rank up +10 when they get completed from
      // Items rank up +100 when they get clicked
      // Items rank up +1000 when they make it to the list and get ticked off
      // Items rank down -100 when they are x-ed from suggestions.
      // The threshold to show up at all is -200.
      // Items with the name rank will remain their initial order (stable sort)
      return allSuggestions
        .filter(item => item.name.toLowerCase().startsWith(text.toLowerCase()))
        .map((item, index) => {
          return {
            index,
            rank: 0,
            ...item
          };
        })
        .filter(item => item.rank  > -200)
        .sort((a, b) => {
          const rankA = a.rank || 0;
          const rankB = b.rank || 0;

          if (rankA === rankB) {
            return a.index < b.index;
          }
          return rankA < rankB;
        })
        .map(item => item.name);
    };
    const suggestions = getSuggestions(text);
    this.setState({suggestions});
  }

  render() {
    return (
      <TodoTextInput
        suggestions={this.state.suggestions}
        newTodo={this.props.newTodo}
        onSave={this.props.onSave}
        placeholder={this.props.placeholder}
        onTextChange={::this.onTextChange}
      />
    );
  }
}

function mapState(state) {
  return {
    suggestions: state.suggestions,
  };
}

export default connect(mapState)(TextInputContainer);
