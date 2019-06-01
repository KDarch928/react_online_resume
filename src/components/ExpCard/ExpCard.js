import React, { Component } from 'react';
import {Col, Row} from "../Grid";
import {List, ListID, ListItem} from "../List";
import Toggle from "../Toggle";

//CSS Styling
const aboutSection = {
  padding: '60px 0',
  paddingLeft: '5%',
  paddingRight: '5%',
  overflow: 'hidden',
  background: '#eff5f5'
};

const title = {
  fontWeight: '300',
  marginBottom: '15px',
  paddingTop: '18px',
  fontSize: '22px'
};

const a = {
  color: '#111'
};


const description = {
  fontSize: '14px',
  lineHeight: '24px',
  marginBottom: '5px'
};

const info = {
  fontSize: '20px',
  color: '#1aa0cd',
  float: 'left',
  lineHeight: '1',
  paddingRight: '8px',
  marginBottom: '20px'
};



export const ExpCard = (props) => {
    return (
        <div>
            <Row>
                <Col size="lg-2"></Col>
                <Col size="lg-3" className="box animated fadeInLeft">
                    <h4 style={title}>
                        <a href={props.url} style={a}>
                            <strong>{props.company}</strong>
                        </a>
                    </h4>
                    <p style={description}>
                        {props.dates}
                    </p>
                    <div>
                        <i className={props.icon} style={info}></i>
                        <p style={description}>{props.location}</p>
                    </div>
                </Col>
                <Col size="lg-6" border="1px solid #ddd">
                  <Toggle 
                    title={props.title}
                    >
                      <List>
                        {props.des.map((desc) =>
                          <ListItem>
                            {desc}
                          </ListItem>
                        )}
                      </List>
                  </Toggle>
                </Col>
                <Col size="lg-1"></Col>
            </Row>
        </div>
    );
};

export default ExpCard;