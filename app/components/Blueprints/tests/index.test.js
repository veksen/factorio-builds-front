import React from 'react';
import { mount, shallow } from 'enzyme';

import Blueprints from '../index';
import Blueprint from '../Blueprint';
import Label from '../Label';
import Textarea from '../Textarea';

describe('<Blueprints />', () => {
  let blueprints;

  // Before each test reset the build data for safety
  beforeEach(() => {
    blueprints = [
      {
        _id: '5a260b658819b13712609b6c', // eslint-disable-line no-underscore-dangle
        updatedAt: '2017-12-05T02:58:45.632Z',
        createdAt: '2017-12-05T02:58:45.632Z',
        name: 'My new blueprint',
        desc: 'My new blueprint description',
        hash: '0af2af34daasda',
        build: '5a22249cb64e8a2625cbbc18',
        order: 0,
      },
      {
        _id: '5a25e24e6ae44534b55b2f45', // eslint-disable-line no-underscore-dangle
        updatedAt: '2017-12-05T00:03:26.966Z',
        createdAt: '2017-12-05T00:03:26.966Z',
        name: 'My blueprint',
        desc: 'My blueprint description',
        hash: '0af2af34d',
        build: '5a22249cb64e8a2625cbbc18',
        order: 0,
      },
    ];
  });

  it('should be a div', () => {
    const renderedComponent = shallow(
      <Blueprints blueprints={blueprints} />
    );
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render multiple blueprints', () => {
    const renderedComponent = shallow(
      <Blueprints blueprints={blueprints} />
    );
    expect(renderedComponent.find(Blueprint).length).toEqual(2);
  });

  it('should render multiple blueprints', () => {
    const renderedComponent = shallow(
      <Blueprints blueprints={blueprints} />
    );
    expect(renderedComponent.find(Blueprint).length).toEqual(2);
  });

  it('should render blueprints names inside labels', () => {
    const renderedComponent = mount(
      <Blueprints blueprints={blueprints} />
    );
    expect(renderedComponent.find(Label).filter('[htmlFor="5a260b658819b13712609b6c"]').text()).toEqual('My new blueprint');
    expect(renderedComponent.find(Label).filter('[htmlFor="5a25e24e6ae44534b55b2f45"]').text()).toEqual('My blueprint');
  });

  it('should render blueprints hashes inside textareas', () => {
    const renderedComponent = mount(
      <Blueprints blueprints={blueprints} />
    );
    expect(renderedComponent.find(Textarea).filter('[id="5a260b658819b13712609b6c"]').text()).toEqual('0af2af34daasda');
    expect(renderedComponent.find(Textarea).filter('[id="5a25e24e6ae44534b55b2f45"]').text()).toEqual('0af2af34d');
  });
});
