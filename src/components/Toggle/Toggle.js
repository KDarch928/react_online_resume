import React, { Component } from 'react';

//css styling
const icon = {
    float: 'right'
};

const title = {
    fontWeight: '300',
    marginBottom: '15px',
    paddingTop: '18px',
    fontSize: '22px',
    color: '#111',
    fontFamily: '"Montserrat", sans-serif'
};

const titleClicked = {
    fontWeight: '300',
    marginBottom: '15px',
    paddingTop: '18px',
    fontSize: '22px',
    color: "#1cbfe0",
    fontFamily: '"Montserrat", sans-serif'
};

export default class Toggle extends Component {
    state = {
        on: false,
    };

    Toggle = () => {
        this.setState({
            on: !this.state.on,
        });
    };


    render () {

        let toggleStyle;

        if (this.state.on){
            toggleStyle = titleClicked;
        } else {
            toggleStyle = title;
        }

        return(
            <div style={toggleStyle}>
                <div onClick={this.Toggle}>
                    <strong>{this.props.title}</strong>
                    <i className="far fa-plus-square" style={icon}></i>
                </div>
                {this.state.on && this.props.children}
            </div>
        );
    };
}