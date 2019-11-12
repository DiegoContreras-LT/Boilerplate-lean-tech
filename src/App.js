import React, {useState} from 'react';
import {singInWithSocialMedia, singInEmailAndPassword} from './environment/Firebase/Auth';
import './App.css';

function App() {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleState = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className="App">
            <button onClick={() => singInWithSocialMedia('FACEBOOK')}>login con facebook</button>
            <br/>
            <br/>
            <button onClick={() => singInWithSocialMedia('GOOGLE')}>login con Google</button>
            <br/>
            <br/>
            <hr/>
            <input type="text" name='email' onChange={handleState} value={state.email}/>
            <br/>
            <input type="text" name='password' onChange={handleState} value={state.password}/>
            <br/>
            <button onClick={() => singInEmailAndPassword(state)}>login</button>
        </div>
    );
}

export default App;
