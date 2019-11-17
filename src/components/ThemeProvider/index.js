import React, {useState, createContext, useContext} from 'react';
import {loadStorage, saveStorage} from "../../tools/storage";
import {THEMES} from "../../utils/colors";
import {ThemeProvider} from "styled-components";

export const ThemeTwoContext = createContext();

export const ProviderTheme = ({children}) => {
    const currentTheme = loadStorage('theme');

    if (!currentTheme) {
        saveStorage('DEFAULT_THEME', 'theme')
    }

    const [theme, setTheme] = useState(THEMES[currentTheme || 'DEFAULT_THEME']);

    const changeTheme = theme => {
        saveStorage(theme, 'theme');
        setTheme(THEMES[theme])
    };

    return (
        <ThemeTwoContext.Provider value={{theme, changeTheme}}>
            <ThemeProvider theme={{theme, changeTheme}}>
                {children}
            </ThemeProvider>
        </ThemeTwoContext.Provider>
    )
};

export const ThemeConsumer = ThemeTwoContext.Consumer;

export const useTheme = () => useContext(ThemeTwoContext);

