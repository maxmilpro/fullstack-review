import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount () {
    this.getRepos();
  }

  search (term) {
    console.log(`${term} was searched`);
    $.post('http://localhost:1128/repos', {username: term}, () => {
      console.log('Sent username to the server');
      this.getRepos();
    });
  }

  getRepos () {
    $.get('http://localhost:1128/repos', (repos) => {
      this.setState({
        repos: repos
      })
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));