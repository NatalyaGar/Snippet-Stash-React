import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: ''
        }

        this.options = {
            lineNumbers: true,
        }

    }

    updateCode = (newCode) => {
        this.setState({ code: newCode }, () => console.log(this.state));
    }

    render() {
        return (
            <CodeMirror 
                value={ this.state.code }
                onChange={ this.updateCode }
                options={ this.options }
            />
        );
    }
}

export default Editor;