import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
  import CodeMirror from './CodeMirror';
import Editor from './CodeMirror';


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

  updateCode = (code) => {
    this.setState({description: code});
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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD SNIPPET
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Snippet List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="category">CATEGORY:</label>
                <input type="text" className="form-control" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <CodeMirror name="description" description={this.state.description} onChange={(code) => this.updateCode(code)} ></CodeMirror>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea type="text" className="form-control" rows="6" name="comment" value={comment} onChange={this.onChange} placeholder="Add a comment" cols="40" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
