import React, {useContext} from 'react';
import {Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import styled from "styled-components";
import {withThemeToggle, useToggleTheme, ThemeToggleConsumer} from "../../components/ThemeToggle";


const LoginWithTheme = styled.div`
    background:${({theme}) => theme.primaryColor}
`;

const Login = () => {
    return (
        <>
            <LoginWithTheme>LOGIN</LoginWithTheme>
            {/*<button onClick={() => changeTheme('DARK_THEME')}>changeTheme dark</button>*/}
            {/*<button onClick={() => changeTheme('LIGHT_THEME')}>changeTheme light</button>*/}
        </>
    )
};
const Dashboard = () => (
    <ThemeToggleConsumer>
        {

            (context) => {
                return (
                    <h1>Dashboard</h1>
                )
            }
        }
    </ThemeToggleConsumer>
);

const Other = () => (
    <ThemeToggleConsumer>
        {

            (context) => {
                return (
                    <>
                        <h1>Dashboard</h1>
                        <button onClick={() => context.toggleTheme('DARK_THEME')}>changeTheme dark</button>
                    </>
                )
            }
        }
    </ThemeToggleConsumer>
);

const Theme = withThemeToggle(props => {
    return <>
        <h1>Theme</h1>
        <button onClick={() => props.toggleTheme('DEFAULT_THEME')}>changeTheme default</button>
    </>
});


const Routes = () => (
    <Switch>
        <PublicRoute path={'/login'} component={Login}/>
        <PrivateRoute exact path={'/'} component={Dashboard}/>
        <PrivateRoute exact path={'/sing'} component={Login}/>
        <PrivateRoute exact path={'/other'} component={Other}/>
        <PrivateRoute exact path={'/theme'} component={Theme}/>
    </Switch>
);

export default Routes;
