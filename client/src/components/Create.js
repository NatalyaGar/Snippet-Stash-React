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
                {/* <div type="text" className="showData" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" > */}
                {/* <input type="text" className="showData form-control" name="category" value={category} onChange={this.onChange} placeholder="CATEGORY" /> */}
                  {/* <select className="form-control categoryDrop" id="snippetCategory"> */}
                  <select className="form-control categoryDrop" id="snippetCategory"name="category" value={category} onChange={this.onChange} placeholder="CATEGORY">
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
              {/* </div> */}
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
