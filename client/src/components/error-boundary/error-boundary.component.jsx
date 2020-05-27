import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }
    
    static getDerivedStateFromError(error) {
        // process the error
        return {hasErrored: true};
    }

    componentDidCatch(error, info) {
        console.log(error)
    }
    
    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png' />
                    <ErrorImageText>It looks like someone tied our shoelaces together and we tripped up in finding the page you wanted. Please try again.</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;