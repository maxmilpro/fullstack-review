const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  githubId: {
    type: String,
    unique: true
  },
  name: String,
  htmlUrl: String,
  forks: Number,
  owner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  console.log(repos);
  repos.forEach((repo) => {
    const newRepo = new Repo({
      githubId: repo.id,
      name: repo.name,
      htmlUrl: repo.html_url,
      forks: repo.forks,
      owner: repo.owner.login
    })
    newRepo.save((err, repo) => {
      if (err) console.dir(err);
    })
  })
}

let retrieve = () => {
  return Repo.aggregate([
    {$sort: {forks: -1, name: 1}},
    {$limit: 25}
  ])
}
module.exports.save = save;
module.exports.retrieve = retrieve;