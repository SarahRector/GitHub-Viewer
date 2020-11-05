import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RepoList from './RepoList';
import { getRepos } from '../../services/gitHubApi';
import { Provider } from 'react-redux';
import store from '../../store';

jest.mock('../../services/gitHubApi.js');

describe('RepoList component', () => {
  it('displays a list of repos', async() => {
    getRepos.mockResolvedValue([
      { id: 1, name: 'A repo', url: 'repo.com' }
    ]);
    render(<Provider store={store}>
      <RepoList />
    </Provider>);

    screen.getByText('Loading...');

    const repoList = await screen.findByTestId('repos');

    return waitFor(() => {
      expect(repoList).not.toBeEmptyDOMElement();
    });
  });
});
