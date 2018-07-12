import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import CategoryBar from './components/CategoryBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snippets: []
    };
  }

  componentDidMount() {
    axios.get('/api/snippet')
      .then(res => {
        this.setState({ snippets: res.data });
        console.log(this.state.snippets);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <CategoryBar />
          <div className="col-10">
            <div class="panel panel-default">
              <div class="panel-heading">
              <h3 class="panel-title" >
                <a aria-label="Left Align">
                  <span class="glyphicon glyphicon-scissors" aria-hidden="true"> </span>
                </a>  SNIPPET CATALOG </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add A New Snippet</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      {/* <th>category</th> */}
                      <th>Category</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.snippets.map(snippet =>
                      <tr>
                        <td><Link to={`/show/${snippet._id}`}>{snippet.category}</Link></td>
                        <td>{snippet.title}</td>
                        <td>{snippet.author}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
