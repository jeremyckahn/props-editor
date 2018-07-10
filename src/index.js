import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';

import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export default class PropEditor extends Component {
  constructor(props) {
    super(...arguments);

    this.state = Object.assign({}, this.props.children.props, props);
    delete this.state.children;
  }

  render() {
    const Children = this.props.children.type;

    return (
      <Fragment>
        <Children {...this.state} />
        <Editor
          value={this.state}
          onChange={state => this.setState(Object.assign({}, state))}
        />
      </Fragment>
    );
  }
}

PropEditor.propTypes = {
  children: object.isRequired,
};
