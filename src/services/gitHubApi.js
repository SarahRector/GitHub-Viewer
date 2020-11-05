export const getRepos = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};

export const getUserProfile = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      followers: json.followers,
      following: json.following,
      profile: json.html_url
    }));
};
