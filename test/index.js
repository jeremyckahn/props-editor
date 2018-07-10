import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import proxyquire from 'proxyquire';

Enzyme.configure({ adapter: new Adapter() });

class ReactJsonViewStub extends Component {}

const StubChild = () => {};

const PropEditor = proxyquire.noCallThru().load('../src/index', {
  'react-json-view': ReactJsonViewStub,
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

  describe('updating child props', () => {
    beforeEach(() => {
      component.instance().onEdit({ updated_src: { foo: 'baz' } });
      component.update();
    });

    it('updates the props of the child', () => {
      assert.equal(component.find(StubChild).props().foo, 'baz');
    });
  });
});
