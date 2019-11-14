import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const auth = true;
export default ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               render={
                   props => auth ? <Redirect to={'/'}/>
                       : <Component {...props}/>}
        />);
}

