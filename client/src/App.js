import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import CategoryBar from './components/CategoryBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      // {
      //   firstName: 'Member',
      //   email: 'email@email.com'
      // },
      snippets: []
    }

  }

  componentDidMount() {
    axios.get('/api/snippet')
      .then(res => {
        this.setState({ snippets: res.data });
        // console.log(this.state.snippets);
      });
    axios.get('/api/sign-in').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />

        <div className="row" id="wrapper">
          <div className="col-2">


            <CategoryBar />
          </div>

          <div className="col-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title" >
                  <a aria-label="Left Align">
                    <span className="glyphicon glyphicon-scissors" aria-hidden="true"> </span>
                  </a>  SNIPPET CATALOG </h3>
              </div>
              <div className="panel-body">
                <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add A New Snippet</Link></h4>
                <table className="table table-stripe">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.snippets.map(snippet =>
                      <tr>
                        <td>{snippet.category}</td>
                        <td><Link to={`/show/${snippet._id}`}>{snippet.title}</Link></td>
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