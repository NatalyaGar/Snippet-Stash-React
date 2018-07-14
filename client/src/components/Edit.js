import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CodeMirror from './CodeMirror';


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snippet: {}
    };
  }

  componentDidMount() {
    axios.get('/api/snippet/'+this.props.match.params.id)
      .then(res => {
        this.setState({ snippet: res.data });
        console.log(this.state.snippet);
      });
  }

  onChange = (e) => {
    const state = this.state.snippet
    state[e.target.name] = e.target.value;
    this.setState({snippet:state});
  }

  // onChange = (e) => {
  //   const state = this.state
  //   state[e.target.name] = e.target.value;
  //   this.setState(state);
  // }


  updateCode = (code) => {
    this.setState({description: code});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { category, title, author, description, comment } = this.state.snippet;

    axios.put('/api/snippet/'+this.props.match.params.id, { category, title, author, description,comment })
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
            <h4><Link to={`/show/${this.state.snippet._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Snippet List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="category">CATEGORY</label>
                <input type="text" class="form-control" name="category" value={this.state.snippet.category} onChange={this.onChange} placeholder="CATEGORY" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.snippet.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.snippet.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <CodeMirror name="description" description="{this.state.code}"onChange={(code) => this.updateCode(code)} ></CodeMirror>
              </div>
              <div class="form-group">
                <label for="comment">Comments:</label>
                <input type="text" class="form-control" name="comment" value={this.state.snippet.comment} onChange={this.onChange} placeholder="Comments" />
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
