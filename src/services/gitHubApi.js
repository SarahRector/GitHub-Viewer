export const getRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.results.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};

export const getUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => json.results.map(userProfile => ({
      name: userProfile.name,
      followers: userProfile.followers,
      following: userProfile.following,
      profile: userProfile.html_url
    })));
};
