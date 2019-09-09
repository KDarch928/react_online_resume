import React, { Component } from 'react';
import {Container, Col, Row} from "../Grid";
import {List, ListID, ListItem} from "../List";
import HoverBtn from "../HoverBtn";

const img = {
    width:'100%'
  };

class FlipCard extends Component {
    
    state = {
        flipped1: false,
    }

    handleFlipping = id => () => {
        const cardId = `fipped${id}`;
        this.setState({[cardId]: !this.state[cardId]});
    }

    render() {
        return(
            <Container style={{marginRight:'1px',marginLeft:'1px'}}>
                <Row className="no-gutters">
                    <Col size="lg-6">
                        <div>
                            <div className="card">
                                <img style={img} src={'img/projects/goals.jpg'} alt="Progression">
                                </img>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Progression</h5>
                                    <HoverBtn url="#" colorType="white">
                                        Details
                                    </HoverBtn>
                                </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Progression</h5>
                                    <p className="card-text">
                                        test
                                    </p>
                                    <HoverBtn url="#" colorType="white">
                                        Back to Front
                                    </HoverBtn>
                                    <HoverBtn url="test" colorType="white">
                                        View Project
                                    </HoverBtn>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FlipCard;

