const axios = require('axios');
// const config = require('../config.js');

let getReposByUsername = async ({username}) => {
  try {
    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${process.env.TOKEN}`
      }
    };
    var repos = await axios(options);
    return repos;
  } catch (error) {
    console.dir(error)
  }
}

module.exports.getReposByUsername = getReposByUsername;