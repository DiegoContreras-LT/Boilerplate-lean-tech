import React from 'react';

export const DisplayError = ({error, errorInfo}) => (
    <div>
        <h1>Error ...</h1>
        <p>{error}</p>
        <p>{errorInfo}</p>
    </div>
);
