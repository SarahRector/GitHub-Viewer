import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders Form', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Form />
      </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
