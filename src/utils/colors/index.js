import {loadStorage, saveStorage} from "../../tools/storage";

const DARK_THEME = {
    primaryColor: 'red',
};

const LIGHT_THEME = {
    primaryColor: 'blue',
};

const DEFAULT_THEME = {
    primaryColor: 'yellow',
};

export const THEMES = {
    DARK_THEME,
    LIGHT_THEME,
    DEFAULT_THEME
};

export const getTheme = () => {

    const currentTheme = loadStorage('theme');

    if (!THEMES[currentTheme]) {
        saveStorage('DEFAULT_THEME','theme');
    }

    return THEMES[currentTheme || 'DEFAULT_THEME']
};

export const setTheme = theme => saveStorage(theme, 'theme');
