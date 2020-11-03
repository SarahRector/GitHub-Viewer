import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RepoDetail from './RepoDetail';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders RepoDetail', () => {
    const { asFragment } = render(<RepoDetail
      name="test repo"
      url="test.com" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
