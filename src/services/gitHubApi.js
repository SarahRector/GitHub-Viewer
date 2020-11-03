export const getRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.results.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};
