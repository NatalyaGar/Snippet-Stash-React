import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Clipboard from 'react-clipboard.js';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snippet: {}
    };
  }

  componentDidMount() {
    axios.get('/api/snippet/' + this.props.match.params.id)
      .then(res => {
        this.setState({ snippet: res.data });
        console.log(this.state.snippet);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('/api/snippet/' + id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading" id="showCardHeading">
            <h3 className="panel-title">
              {this.state.snippet.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4 ><Link className="backLink" to="/"><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back to Snippet List </Link></h4>
            <dl>
              <dt className="labels">CATEGORY:</dt>
              <dd className="showData">{this.state.snippet.category}</dd>
              <dt className="labels">AUTHOR:</dt>
              <dd className="showData">{this.state.snippet.author}</dd>
              <dt className="labels">DESCRIPTION:</dt>
              <dd className="showData">
                <textarea id="codeDescription" type="text" rows='11' cols="100" value={this.state.snippet.description} >
                </textarea>
              </dd>
              
              <button type="button" className="btn btn-secondary clipboardBtn"><span>
              <Clipboard component="a" className="clipboardBtn" data-clipboard-text={this.state.snippet.description} button-title="Click to copy the entire code"> 
                copy to clipboard
              </Clipboard></span> </button>
              <dt className="labels">COMMENT:</dt>
              <dd className="showData">{this.state.snippet.comment}</dd>
            </dl>
            <Link to={`/edit/${this.state.snippet._id}`} className="btn btn-success changeBtn">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.snippet._id)} className="btn btn-danger changeBtn">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;