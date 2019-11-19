import React, {useState, createContext} from 'react';
import {ThemeProvider} from "styled-components";
import {getTheme, setTheme} from "../../../utils/colors";

export const ThemeToggleContext = createContext();

export const ThemeToggleProvider = ({children}) => {

    const [theme, setToggleTheme] = useState(getTheme());

    const toggleTheme = theme => {
        setTheme(theme);
        setToggleTheme(getTheme());
    };

    return (
        <ThemeToggleContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
};

export const ThemeToggleConsumer = ThemeToggleContext.Consumer;
