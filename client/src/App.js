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
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
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
                <a aria-label="Left Align">
                  <span class="glyphicon glyphicon-scissors" aria-hidden="true">
                  </span>
                </a>
                <h3 class="panel-title" > SNIPPET CATALOG </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add A New Snippet</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      {/* <th>ISBN</th> */}
                      <th>Category</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.books.map(book =>
                      <tr>
                        <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
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
