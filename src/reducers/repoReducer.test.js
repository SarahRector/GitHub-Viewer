import reducer from './repoReducer';
import { setRepos, setLoading } from '../actions/repoActions';

describe('repo reducer', () => {
  it('handles the SET_REPOS action', () => {
    const state = {
      list: [],
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
      loading: true,
      error: null
    });
  });

  it('handles the SET_LOADING action', () => {
    const state = {
      list: [],
      loading: true,
      error: null
    };

    const action = setLoading(false);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [],
      loading: false,
      error: null
    });
  });
});
