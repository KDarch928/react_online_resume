import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import { Col, Row } from '../../components/Grid';


//CSS styling
const skillSection = {
    padding: '60px 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden',
    background: '#eff5f5'
};

const box = {
    padding: '40px',
    marginBottom: '30px',
    boxShadow: '0px 0px 30px rgba(73, 78, 92, 0.15)',
    background: '#fff',
    transition: '0.4s'
};

const skillBox = {
    paddingBottom: '40px',
    paddingTop: '10px',
    transform: 'scale(1)',
    transition: 'all 0.3s ease-in-out 0.2s'
};

const h4 = {
    fontWeight: '700',
    marginBottom: '15',
    marginLeft: '40px',
    fontsize: '18px',
    float: 'left',
    textTransform: 'uppercase',
    color: '#fff'
};

class Skills extends Component {
    
    constructor(props) {
        super(props);
    }


    calculateRemainder = (percent) => {
        let remainder = 100 - percent;
        return remainder;
    }

    render () {

        let percent = Data.resume.skills[0].level;
        let remainder = 100 - percent;

        console.log(percent);

        const colorBackground = {

            background: `linear-gradient(to right, color ${percent}, color ${remainder})` 
        };

        console.log(colorBackground);

        return (
            <div style={skillSection}>
                <Section sectionId="skills">
                    <SectionHeader 
                        title="Program Skills"
                    />
                    <Row>
                        <Col size="lg-6">
                            <div style={box} className="wow fadeInLeft" id="skill-display1">
                                <div>
                                    <div style={skillBox}>
                                        <div>
                                            <h4 style={h4}>
                                                {Data.resume.skills[0].name}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Section>
            </div>
        )
    }
}



export default Skills;