import reducer from './repoReducer';
import { setRepos, setLoading, setProfile } from '../actions/repoActions';

describe('repo reducer', () => {
  it('handles the SET_REPOS action', () => {
    const state = {
      list: [],
      profile: {},
      loading: true,
      error: null
    };

    const action = setRepos([
      { name: 'testRepo 1' },
      { name: 'testRepo 2' }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [
        { name: 'testRepo 1' },
        { name: 'testRepo 2' }
      ],
      profile: {},
      loading: true,
      error: null
    });
  });

  it('handles the SET_LOADING action', () => {
    const state = {
      list: [],
      profile: {},
      loading: true,
      error: null
    };

    const action = setLoading(false);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [],
      profile: {},
      loading: false,
      error: null
    });
  });

  it('handles the SET_PROFILE action', () => {
    const state = {
      list: [],
      profile: {},
      loading: true,
      error: null
    };

    const action = setProfile({
      name: 'test name',
      followers: '3',
      following: '0',
      profileLink: 'testurl.com'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [],
      profile: {
        name: 'test name',
        followers: '3',
        following: '0',
        profileLink: 'testurl.com'
      },
      loading: true,
      error: null
    });
  });
});
