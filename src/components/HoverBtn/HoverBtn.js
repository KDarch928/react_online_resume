import React, { Component } from 'react';


var styles1 = {
    mouseHover: {
        color: '#1aa0cd',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px 28px',
        borderRadius: '50px',
        transition: '0.5s',
        margin: '10px',
        border: '2px solid #fff',
        background: '#fff'
    },
    mouseLeave: {
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px 28px',
        borderRadius: '50px',
        transition: '0.5s',
        margin: '10px',
        border: '2px solid #fff',
        background: 'none'
    }

};

var styles2 = {
    mouseHover: {
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px 28px',
        borderRadius: '50px',
        transition: '0.5s',
        margin: '10px',
        border: '2px solid #fff',
        background: '#1aa0cd'
    },
    mouseLeave: {
        color: '#1aa0cd',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px 28px',
        borderRadius: '50px',
        transition: '0.5s',
        margin: '10px',
        border: '2px solid #1aa0cd',
        background: 'none'
    }

};

class HoverBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text_state: 'mouseLeave',
            white_background: 'false'           
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

    checkBackgroundState = (backgroundType) => {
        
        let styleType;

        if(backgroundType === "white") {
            styleType = styles2[this.state.text_state];
        } else {
            styleType = styles1[this.state.text_state];
        }

        return styleType;

    }

    render () {


        return (
            <div>
                <a href={this.props.url} style={this.checkBackgroundState(`${this.props.colorType?'white':''}`)}
                onMouseEnter={this.changeColor.bind(this)}
                onMouseLeave={this.resetColor.bind(this)}>
                    {this.props.children}
                </a>
            </div>
        )
    }
};

export default HoverBtn;