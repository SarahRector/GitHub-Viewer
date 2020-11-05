import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, fetchRepos, setLookup } from '../../actions/repoActions';

const Form = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.lookup);

  const handleChange = ({ target }) => {
    dispatch(setLookup(target.value));
  };

  const handleSubmit = () => {
    dispatch(fetchProfile(userName));
    dispatch(fetchRepos(userName));
  };

  return (
    <>
      <label htmlFor="userLookup">User Lookup</label>
      <input
        id="userLookup"
        type="text"
        name="userLookup" 
        onChange={handleChange} />
      <button onClick={handleSubmit}>Search!</button>
    </>
  );
};

export default Form;
