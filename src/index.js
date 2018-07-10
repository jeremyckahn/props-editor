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
    // Start all properties off as undefined so that deleted props are cleared
    // out when passed to setState
    // https://stackoverflow.com/a/32884916
    const newState = Object.keys(this.state).reduce((acc, key) => {
      acc[key] = undefined;
      return acc;
    }, {});

    this.setState(Object.assign(newState, updated_src));
  }

  render() {
    const Children = this.props.children.type;
    const onEdit = this.onEdit.bind(this);

    return (
      <Fragment>
        <Children {...this.state} />
        <ReactJson
          displayDataTypes={false}
          enableClipboard={false}
          name="props"
          src={this.state}
          onEdit={onEdit}
          onAdd={onEdit}
          onDelete={onEdit}
        />
      </Fragment>
    );
  }
}

PropsEditor.propTypes = {
  children: object.isRequired,
};
