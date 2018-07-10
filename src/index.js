import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';

import ReactJson from 'react-json-view';

export default class PropsEditor extends Component {
  constructor(props) {
    super(...arguments);

    this.state = Object.assign({}, this.props.children.props, props);
    delete this.state.children;
  }

  onEdit({ updated_src }) {
    this.setState(Object.assign({}, updated_src));
  }

  render() {
    const Children = this.props.children.type;

    return (
      <Fragment>
        <Children {...this.state} />
        <ReactJson
          displayDataTypes={false}
          name="props"
          src={this.state}
          onEdit={this.onEdit.bind(this)}
        />
      </Fragment>
    );
  }
}

PropsEditor.propTypes = {
  children: object.isRequired,
};
