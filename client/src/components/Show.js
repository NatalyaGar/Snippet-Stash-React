import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CodeMirror from './CodeMirror';


class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/snippet/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.snippet.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Snippet List </Link></h4>
            <dl>
              <dt>CATEGORY:</dt>
              <dd>{this.state.snippet.category}</dd>
              <dt>Author:</dt>
              <dd>{this.state.snippet.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.snippet.description}</dd>
              <dt>Comment:</dt>
              <dd>{this.state.snippet.comment}</dd>
            </dl>
            <Link to={`/edit/${this.state.snippet._id}`} class="btn btn-success">Edit</Link>&nbsp;
            {/* <Link to={`/edit/${this.state.snippet._id}`} class="btn btn-primary">Add a Comment</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.snippet._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
