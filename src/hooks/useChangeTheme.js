import {useState} from 'react';
import {getTheme, setTheme} from "../utils/Colors";

export const useChangeTheme = () => {
    const [theme, setChangeTheme] = useState(getTheme());

    const handleChangeTheme = theme => {
        setTheme(theme);
        setChangeTheme(theme);
    };

    return [
        theme,
        handleChangeTheme
    ]

};
