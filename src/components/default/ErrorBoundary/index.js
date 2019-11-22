import React, {Component} from 'react';
import {DisplayError} from "../DieplayError";

class ErrorBoundary extends Component {

    state = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo,
            error
        })
    }

    render() {
        const {error} = this.state;

        return error
            ? <DisplayError {...this.state}/>
            : this.props.children
    }
}

export default ErrorBoundary;
