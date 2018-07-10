import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description,publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description,publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT SNIPPET
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.book._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Snippet List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">CATEGORY</label>
                <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="CATEGORY" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" rows="11" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="publisher">Comments:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Comments" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
