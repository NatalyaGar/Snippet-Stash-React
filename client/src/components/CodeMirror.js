import React, { Component } from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/cobalt.css';



class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: ''
        }

        this.options = {
            lineNumbers: true,
            theme: 'cobalt',
            mode: 'javascript'
        }

    }

    updateCode = (newCode) => {
        this.setState({ code: newCode }, () => console.log(this.state));
        // this.props.onChange({code: newCode})
    }

    render() {
        return (
            <CodeMirror 
                value={ this.props.description }
                onChange={ this.props.onChange }
                options={ this.options }
            />
        );
    }
}

export default Editor;