import { getRepos, getUserProfile } from '../services/gitHubApi';

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = profiles => ({
  type: SET_PROFILE,
  payload: profiles
});

export const fetchRepos = () => dispatch => {
  getRepos()
    .then(repos => {
      dispatch(setRepos(repos));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const fetchProfile = () => dispatch => {
  getUserProfile()
    .then(profiles => {
      dispatch(setProfile(profiles));
    })
    .finally(() => dispatch(setLoading(false)));
};
