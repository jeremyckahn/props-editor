import React from 'react';
import ReactDOM from 'react-dom';

import PropsEditor from '../src/index.js';

ReactDOM.render(
  <PropsEditor>
    <input
      value="This can only be modified via props!"
      type="text"
      style={{ fontSize: '2em' }}
      readOnly
    />
  </PropsEditor>,
  document.getElementById('app')
);
