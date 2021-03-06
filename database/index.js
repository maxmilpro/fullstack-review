const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://dbUser:${process.env.CLUSTER}@cluster0.i6urc.mongodb.net/fetcher?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log(`we're connected`);
})

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
  console.log('ATTEMPTING TO SAVE THE REPOS--------------->')
  repos.forEach((repo) => {
    var newRepo = new Repo({
      githubId: repo.id,
      name: repo.name,
      htmlUrl: repo.html_url,
      forks: repo.forks,
      owner: repo.owner.login
    })
    console.log(`INSERTING NEW REPO: ${newRepo}----------->`)
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