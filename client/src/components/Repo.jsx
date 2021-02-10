import React from 'react';

const Repo = ({repo}) => {
return (
  <tr>
    <td>{repo.name}</td>
    <td>{repo.owner}</td>
    <td>{repo.forks}</td>
  </tr>
)
}

export default Repo;