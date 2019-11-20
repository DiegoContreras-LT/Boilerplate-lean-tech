import React, {Component} from 'react';
import {getTheme, setTheme} from "../utils/Colors";

const getDisplayName = WrapperComponent => WrapperComponent.displayName || WrapperComponent.name || 'component';

export const withChangeTheme = WrapperComponent => {
    class WithChangeTheme extends Component {
        state = {
            theme: getTheme(),
        };

        changeTheme = theme => {
            setTheme(theme);
            this.setState({theme: theme});
        };

        render() {
            return (
                <WrapperComponent theme={this.state.theme} changeTheme={this.changeTheme} {...this.props}/>
            )
        }
    }


    WithChangeTheme.displayName = `withChangeTheme(${getDisplayName(WrapperComponent)})`;

    return WithChangeTheme;
};
