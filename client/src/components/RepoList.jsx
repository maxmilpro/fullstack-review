import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <th>Repo</th>
          <th>Owner</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map((repo) => {
          return <Repo repo={repo} key={repo._id}/>
        })}
      </tbody>
    </table>
  </div>
)

export default RepoList;