import React, { Component } from 'react';

var styles = {
    mouseHover: {
        color: '#1aa0cd'
    },
    mouseLeave: {
        color: '#666666'
    }

};

class HoverTextLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text_state: 'mouseLeave'
        };
    }

    changeColor = () => {
        this.setState({
            text_state:'mouseHover'
        });
    }

    resetColor = () => {
        this.setState({
            text_state:'mouseLeave'
        });
    }

    render () {
        return (
            <div>
                <a href={this.props.url} style={styles[this.state.text_state]}
                onMouseEnter={this.changeColor.bind(this)}
                onMouseLeave={this.resetColor.bind(this)}>
                    {this.props.children}
                </a>
            </div>
        )
    }
};

export default HoverTextLink;