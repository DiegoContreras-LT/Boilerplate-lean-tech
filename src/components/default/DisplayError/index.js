import React from 'react';

export const DisplayError = ({error, errorInfo}) => {
    return (
        <div>
            <h1>Error ...</h1>
            <p>{error.toString()}</p>
            <p>{errorInfo.componentStack}</p>
        </div>
    )
};
