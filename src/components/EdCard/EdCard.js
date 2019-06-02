import React, { Component } from 'react';
import {Col, Row} from "../Grid";
import Hover from "../HoverLink";
import {List, ListID, ListItem} from "../List";

//CSS style
const info = {
    fontSize: '20px',
    color: '#1aa0cd',
    float: 'left',
    lineHeight: '1',
    paddingRight: '8px',
    marginBottom: '20px'
};

const title = {
    fontWeight: '300',
    marginBottom: '15px',
    fontSize: '22px'
};

const a = {
    color: '#111'
};  

const schoolLink = {
    color:'#666666'
};

const description = {
    fontSize:'14px',
    lineHeight:'24px',
    marginBottom:'5px'
};


export const EdCard = (props) => {

    let solid;

    if(props.ind === props.length) {
        solid = "";
    } else {
        solid="1px solid #ddd";
    }


    return (
        <div>
            <Row>
                <Col size="lg-2"></Col>
                <Col size="lg-8" className="box animated fadeInRight" border={solid}>
                    <h4 style={title}>
                        <a href={props.url} style={a}>
                            <strong>{props.focus}</strong>
                        </a>
                    </h4>
                    <h6>{props.date}</h6>
                    <p style={description}>
                        <Hover 
                            url={props.schoolUrl}
                        >
                            {props.school}
                        </Hover>
                    </p>
                    <div>
                        <i className={props.icon} style={info}></i>
                        <p style={description}>
                            {props.location}
                        </p>
                    </div>
                </Col>
                <Col size="lg-2"></Col>
            </Row>
        </div>
    );
};



export default EdCard;