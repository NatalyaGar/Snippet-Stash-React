import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      category: '',
      title: '',
      author: '',
      description: '',
      comment: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { category, title, author, description, comment } = this.state;

    axios.post('/api/snippet', { category, title, author, description, comment })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { category, title, author, description, comment } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD SNIPPET
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Snippet List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="category">CATEGORY:</label>
                <input type="text" class="form-control" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" rows="11" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="11">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="comment">Comment:</label>
                <textArea type="text" class="form-control" rows="6" name="comment" value={comment} onChange={this.onChange} placeholder="Add a comment" cols="40" rows="6"></textArea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
