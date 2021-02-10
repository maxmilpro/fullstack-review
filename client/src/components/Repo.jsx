import React from 'react';

const Repo = ({repo}) => {
return (
  <tr>
    <td><a href={repo.htmlUrl}>{repo.name}</a></td>
    <td>{repo.owner}</td>
    <td>{repo.forks}</td>
  </tr>
)
}

export default Repo;