import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CodeMirror from './CodeMirror';

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
    this.setState({ description: code });
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
    const { category, title, author, comment } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading" id="showCardHeading">
            <h3 className="panel-title">
              ADD SNIPPET
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link className="backLink" to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Snippet List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="labels" htmlFor="category">CATEGORY:</label>
                <div type="text" className="showData" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" >
                  <select className="form-control categoryDrop" id="snippetCategory">
                    <option value="1">  AJAX</option>
                    <option value="2">  CSS</option>
                    <option value="3">  Express</option>
                    <option value="4">  Firebase</option>
                    <option value="5">  Handlebars</option>
                    <option value="6">  HTML</option>
                    <option value="7">  JavaScript</option>
                    <option value="8">  jQuery</option>
                    <option value="9">  MongoDB</option>
                    <option value="10"> Mongoose</option>
                    <option value="11"> MySQL</option>
                    <option value="12"> Node</option>
                    <option value="13"> React</option>
                    <option value="14"> Sequelize</option>
                    <option value="15"> Mongoose</option>
                    <option value="16"> Express</option>
                    <option value="17"> MySQL</option>
                    <option value="18"> MongoDB</option>
                    <option value="19"> Node</option>
                    <option value="20"> Handlebars</option>
                    <option value="21"> Testing</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="labels" htmlFor="title">TITLE:</label>
                <input type="text" className="showData form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label className="labels" htmlFor="author">AUTHOR:</label>
                <input type="text" className="showData form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label className="labels" htmlFor="description">DESCRIPTION:</label>
                <CodeMirror name="description" description={this.state.description} onChange={(code) => this.updateCode(code)} ></CodeMirror>
              </div>
              <div className="form-group">
                <label className="labels" htmlFor="comment">COMMENT:</label>
                <textarea type="text" className="showData form-control" name="comment" value={comment} onChange={this.onChange} placeholder="(Optional) Add a comment" cols="40" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-default clipboardBtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
