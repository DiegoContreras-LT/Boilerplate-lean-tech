import React, {Component} from "react";
import {getTheme, setTheme} from "../../../utils/colors";

export function withThemeToggle(WrappedComponent) {
    return class extends Component {
        state = {
            theme: getTheme(),
        };

        toggleTheme = theme => {
            setTheme(theme);
            this.setState({theme: getTheme()});
        };

        render() {
            return <WrappedComponent
                {...this.props}
                theme={this.state.theme}
                toggleTheme={this.toggleTheme}
            />
        }
    }
}
