import React from 'react';

import './App.css';

class Farm extends React.Component {

  render() {
    return (
      <div class="inset">
        <div>
          <a href="#">{this.props.name}</a>
        </div>
      </div>
    );
  }
}

export default Farm;