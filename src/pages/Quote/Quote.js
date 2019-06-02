import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import {Row, Col} from "../../components/Grid";
import ExpCard from "../../components/ExpCard";

//CSS Style
const sectionStyle = {
    overflow: 'hidden',
    background: 'linear-gradient(to right bottom, rgba(28, 191, 224, 0.5), rgba(33, 135, 183, 0.5)), url("img/smartbldg.jpg") fixed center top no-repeat',
    backgroundSize: 'cover',
    padding: '80px 0'
};

const ctaText = {
    color:'#fff',
    textAlign: 'center'
};


const Quote = () => (
    <div style={sectionStyle}>
        <Section sectionId="call-to-action">
            <Row>
                <Col size="lg-12">
                    <p style={ctaText}>
                        {Data.resume.quote[0].description}
                        test
                    </p>
                    <p style={ctaText}>
                        {Data.resume.quote[0].author}
                    </p>
                </Col>
            </Row>
        </Section>
    </div>
);


export default Quote;