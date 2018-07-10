import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import proxyquire from 'proxyquire';

Enzyme.configure({ adapter: new Adapter() });

class JsonEditorStub extends Component {}

const StubChild = () => {};

const PropEditor = proxyquire.noCallThru().load('../src/index', {
  'jsoneditor-react': { JsonEditor: () => JsonEditorStub },
  'jsoneditor-react/es/editor.min.css': {
    '@noCallThru': true,
  },
}).default;

let component;

describe('PropEditor', () => {
  beforeEach(() => {
    component = shallow(
      <PropEditor>
        <StubChild foo="bar" />
      </PropEditor>
    );
  });

  describe('intercepting props', () => {
    it('takes the props of the child as state', () => {
      assert.deepEqual(component.state(), { foo: 'bar' });
    });
  });
});
