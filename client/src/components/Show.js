import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Clipboard from 'react-clipboard.js';

// class MyView extends Component {
//   render() {
//     return (
//       <Clipboard component="a" button-href="#" data-clipboard-text={this.state.snippet.description}>
//         copy to clipboard
//       </Clipboard>
//     );
//   }
// }

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
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.snippet.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back to Snippet List </Link></h4>
            <dl>
              <dt>CATEGORY:</dt>
              <dd>{this.state.snippet.category}</dd>
              <dt>Author:</dt>
              <dd>{this.state.snippet.author}</dd>
              <dt>Description:</dt>
              <dd>
                <textarea id="codeDescription" type="text" rows='11' cols="100" value={this.state.snippet.description} >
                </textarea>
              </dd>
              
              {/* <button type="button" className="btn btn-secondary clipboardBtn"><span>
              <Clipboard component="a"  data-clipboard-text={this.state.snippet.description} button-title="Click to copy the entire code"> 
                copy to clipboard
              </Clipboard></span> </button> */}

              {/* <button type="button" className="btn btn-secondary">Copy the Code</button> */}
              <dt>Comment:</dt>
              <dd>{this.state.snippet.comment}</dd>
            </dl>
            <Link to={`/edit/${this.state.snippet._id}`} className="btn btn-success">Edit</Link>&nbsp;
            {/* <Link to={`/edit/${this.state.snippet._id}`} className="btn btn-primary">Add a Comment</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.snippet._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
