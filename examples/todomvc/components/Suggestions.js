import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Suggestions extends Component {
  static propTypes = {
    suggestions: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleUseText: PropTypes.func.isRequired,
  };

  render() {
    const style = {
      position: 'absolute',
      top: '100%',
      left: 0,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      width: '100%',
      zIndex: 3,
      cursor: 'default',
    };

    const itemStyle = {
      wordBreak: 'break-all',
      padding: '15px 15px 15px 60px',
      lineHeight: 1.2,
      transition: 'color 0.4s',
      display: 'block',
      fontSize: '24px',
      borderBottom: '1px solid #ededed',
    }

    return (
      <div style={style}>
        {this.props.suggestions.map(suggestion => (
          <div style={itemStyle} key={suggestion} onClick={ () => {this.props.handleSelect(suggestion)} }>
            <div onClick={ () => {this.props.handleUseText(suggestion)} }></div>
            {suggestion}
          </div>
        ))}
      </div>
    );
  }
}
