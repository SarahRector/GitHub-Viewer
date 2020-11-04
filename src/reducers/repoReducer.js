import { SET_REPOS, SET_LOADING, SET_PROFILE } from '../actions/repoActions';

const initialState = {
  list: [],
  loading: true,
  profile: {},
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_REPOS:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
