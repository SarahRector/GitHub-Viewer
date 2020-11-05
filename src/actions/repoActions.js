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

export const SET_LOOKUP = 'SET_LOOKUP';
export const setLookup = lookups => ({
  type: SET_LOOKUP,
  payload: lookups
});

export const fetchRepos = (userName) => dispatch => {
  getRepos(userName)
    .then(repos => {
      dispatch(setRepos(repos));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const fetchProfile = (userName) => dispatch => {
  getUserProfile(userName)
    .then(profiles => {
      dispatch(setProfile(profiles));
    })
    .finally(() => dispatch(setLoading(false)));
};
