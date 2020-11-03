import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../actions/repoActions';
import RepoDetail from './RepoDetail';

const RepoList = () => {
  const repos = useSelector(state => state.repos.list);
  const loading = useSelector(state => state.repos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <RepoDetail {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

export default RepoList;
