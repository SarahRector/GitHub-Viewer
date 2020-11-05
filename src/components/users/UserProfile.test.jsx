import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import { getUserProfile } from '../../services/gitHubApi';
import { Provider } from 'react-redux';
import store from '../../store';

jest.mock('../../services/gitHubApi.js');

describe('UserProfile component', () => {
  it('displays a user profile', async() => {
    getUserProfile.mockResolvedValue({
      name: 'test name',
      followers: '3',
      following: '0',
      profileLink: 'testurl.com'
    });

    render(<Provider store={store}>
      <UserProfile />
    </Provider>);

    screen.getByText('Loading...');

    const userProfile = await screen.findByTestId('profile');

    return waitFor(() => {
      expect(userProfile).not.toBeEmptyDOMElement();
    });
  });
});
