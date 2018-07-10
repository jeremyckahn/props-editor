import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import ReactDOM from 'react-dom';

import PropsEditor from '../src/index.js';

class DataVisualizer extends Component {
  render() {
    return (
      <div>
        <h1>
          This is a read-only view of the <code>props</code> that are being
          passed to the child:
        </h1>
        <ReactJson
          enableClipboard={false}
          name="child props (read-only)"
          src={this.props}
        />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(
  <PropsEditor>
    <DataVisualizer foo="bar" object={{ anArray: [1, 2, 3] }} />
  </PropsEditor>,
  document.getElementById('app')
);
