import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ThemeConsumer } from "../../components/ThemeProvider";
import { ThemeTwoContext } from "../../components/ThemeProvider";
import { useTheme } from "../../components/ThemeProvider";
import styled from "styled-components";
import { ThemeContext, ThemeConsumer as ThemeDefault } from "styled-components";
import { Text } from "./../../components/default/Text";

const LoginWithTheme = styled.div`
  background: ${({ theme }) => theme.theme.primaryColor};
`;

const Login = () => {
  const themeData = useTheme();
  const { theme, changeTheme } = useContext(ThemeTwoContext);
  console.log("context", useContext(ThemeContext));

  console.log(theme, themeData);
  return (
    <>
      <LoginWithTheme>LOGIN</LoginWithTheme>
      <button onClick={() => changeTheme("DARK_THEME")}>
        changeTheme dark
      </button>
      <button onClick={() => changeTheme("LIGHT_THEME")}>
        changeTheme light
      </button>
    </>
  );
};
const Dashboard = () => (
  <ThemeConsumer>
    {context => {
      console.log(context);
      return (
        <>
          <h1>Dashboard</h1>
          <Text
            avoid
            contentKey={'test'}
            fontFamily={"TEXT"}
            fontStyle={"NORMAL"}
            fontWeight={"BOLD"}
            fontColor={"textColor"}
            fontSize={"20px"}
            content={'Test'}
          />
        </>
      );
    }}
  </ThemeConsumer>
);

const Other = () => (
  <ThemeDefault>
    {context => {
      console.log("other", context);
      return (
        <>
          <h1>Dashboard</h1>
          <button onClick={() => context.changeTheme("DARK_THEME")}>
            changeTheme dark
          </button>
        </>
      );
    }}
  </ThemeDefault>
);

const Routes = () => (
  <Switch>
    <PublicRoute path={"/login"} component={Login} />
    <PrivateRoute exact path={"/"} component={Dashboard} />
    <PrivateRoute exact path={"/sing"} component={Login} />
    <PrivateRoute exact path={"/other"} component={Other} />
  </Switch>
);

export default Routes;
