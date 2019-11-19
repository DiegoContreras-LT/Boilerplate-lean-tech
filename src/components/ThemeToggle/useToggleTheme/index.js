import {useContext} from "react";
import {ThemeToggleContext} from "../ThemeToggleProvider";

export const useToggleTheme = () => useContext(ThemeToggleContext);
