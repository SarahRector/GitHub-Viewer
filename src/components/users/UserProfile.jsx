import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/repoActions';

const UserProfile = () => {
  const profile = useSelector(state => state.profile);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Repo Owned By: {profile.name}</h1>
      <p>Follower Count: {profile.followers}</p>
      <p>Following Count: {profile.following}</p>
      <a href={profile.html_url}>Link: {profile.html.url}</a>
    </>
  );
};

export default UserProfile;
