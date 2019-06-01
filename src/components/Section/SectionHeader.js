import React from "react";

const HeaderTitle = {
    fontSize: '32px',
    color: '#111',
    textAlign: 'center',
    fontWeight: '400'
};

const Description = {
    textAlign: 'center',
    paddingBottom: '40px',
    color: '#777',
    fontStyle: 'italic'
};

const Divider = {
    display: 'block',
    width: '60px',
    height: '3px',
    background: '#1aa0cd',
    margin: '0 auto',
    marginBottom: '20px'
}

export const SectionHeader = (props) => {
    return (
        <div>
            <h3 style={HeaderTitle}>
                {props.title}
            </h3>
            <span style={Divider}></span>
        </div>
    );
};
