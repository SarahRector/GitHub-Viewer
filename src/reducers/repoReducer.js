import { SET_REPOS, SET_LOADING } from '../actions/repoActions';

const initialState = {
  list: [],
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_REPOS:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
