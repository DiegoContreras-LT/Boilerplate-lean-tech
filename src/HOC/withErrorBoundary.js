import React, {Component} from 'react';
import {DisplayError} from "../components/default/DisplayError";

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const withErrorBoundary = WrappedComponent => {
    class WithErrorBoundary extends Component {
        state = {
            error: null,
            errorInfo: null
        };

        componentDidCatch(error, errorInfo) {
            this.setState({error, errorInfo})
        }

        render() {
            const {error} = this.state;

            return (
                error ? <DisplayError {...this.state}/>
                    : <WrappedComponent {...this.props}/>
            )
        }

    }

    WithErrorBoundary.displayName = `withErrorBoundary(${getDisplayName(WrappedComponent)})`;

    return WithErrorBoundary;
};


