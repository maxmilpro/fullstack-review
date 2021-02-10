const github = require('../helpers/github.js');
const db = require('../database/index.js');
const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  github.getReposByUsername(req.body)
  .then((repos) => {
    db.save(repos.data)
  })
  .then(() => {
    res.end()
  })
  .catch((err) => {
    console.dir(err)
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

