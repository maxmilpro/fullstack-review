const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = async ({username}) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  try {
    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };
    var repos = await axios(options);
    return repos;
  } catch (error) {
    console.dir(error)
  }


}

module.exports.getReposByUsername = getReposByUsername;