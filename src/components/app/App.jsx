import React from 'react';
import Form from '../form/Form';
import RepoList from '../repos/RepoList';
import UserProfile from '../users/UserProfile';

export default function App() {
  return (
    <>
      <Form />
      <UserProfile />
      <RepoList />
    </>
  );
}
