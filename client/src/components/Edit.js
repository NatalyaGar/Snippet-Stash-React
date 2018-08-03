import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CodeMirror from './CodeMirror';

class Edit extends Component {
  state = {
    snippet: {}
  }

  componentDidMount() {
    axios.get('/api/snippet/' + this.props.match.params.id)
      .then(res => {
        this.setState({ snippet: res.data });
        console.log(this.state.snippet);
        console.log(this.state.snippet.description);
      });
  }

  onChange = (e) => {
    const state = this.state.snippet
    state[e.target.name] = e.target.value;
    this.setState({ snippet: state });
  }

  updateCode = (code) => {
    this.setState({
      snippet: {
        ...this.state.snippet,
        description: code,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { category, title, author, description, comment } = this.state.snippet;

    axios.put('/api/snippet/' + this.props.match.params.id, { category, title, author, description, comment })
      .then((result) => {
        this.props.history.push("/show/" + this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading" id="editCardHeading">
            <h3 className="panel-title">
              EDIT SNIPPET
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link className="backLink" to={`/show/${this.state.snippet._id}`}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back To Snippet</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="labels" htmlFor="category">CATEGORY:</label>
                {/* <div type="text" className="showData" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" > */}
                {/* <input type="text" className="showData form-control" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" /> */}
                {/* <select className="form-control categoryDrop" id="snippetCategory"> */}
                <select className="form-control categoryDrop" id="snippetCategory" name="category" value={this.state.snippet.category} onChange={this.onChange} placeholder="CATEGORY">
                  <option>  AJAX</option>
                  <option>  CSS</option>
                  <option>  Express</option>
                  <option>  Firebase</option>
                  <option>  Handlebars</option>
                  <option>  HTML</option>
                  <option>  JavaScript</option>
                  <option>  jQuery</option>
                  <option>  MongoDB</option>
                  <option> Mongoose</option>
                  <option> MySQL</option>
                  <option> Node</option>
                  <option> React</option>
                  <option> Sequelize</option>
                  <option> Mongoose</option>
                  <option> Express</option>
                  <option> MySQL</option>
                  <option> MongoDB</option>
                  <option> Node</option>
                  <option> Handlebars</option>
                  <option> Testing</option>
                </select>
              </div>

              {/*             
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="category" className="labels">CATEGORY</label>
                <input type="text" className="showData form-control" name="category" value={this.state.snippet.category} onChange={this.onChange} placeholder="CATEGORY" />
              </div> */}
              <div className="form-group">
                <label htmlFor="title" className="labels">TITLE:</label>
                <input type="text" className="showData form-control" name="title" value={this.state.snippet.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author" className="labels">AUTHOR:</label>
                <input type="text" className="showData form-control" name="author" value={this.state.snippet.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="labels">DESCRIPTION:</label>
                {this.state.snippet.description
                  ? <CodeMirror name="description" description={this.state.snippet.description} onChange={(code) => this.updateCode(code)} ></CodeMirror>
                  : " Sorry, you cannnot delete everything in the description box. Please refresh the page and try your edit again."
                }

              </div>
              <div className="form-group">
                <label htmlFor="comment" className="labels">COMMENTS:</label>
                <input type="text" className="showData form-control" name="comment" value={this.state.snippet.comment} onChange={this.onChange} placeholder="Comments" />
              </div>
              <button type="submit" className="clipboardBtn btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
