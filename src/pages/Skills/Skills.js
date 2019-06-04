import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import { Col, Row } from '../../components/Grid';
import Skill from '../../components/SkillCard';


//CSS styling
const skillSection = {
    padding: '60px 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden',
    background: '#eff5f5'
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
        let remainder = this.calculateRemainder(percent);


        return (
            <div style={skillSection}>
                <Section sectionId="skills">
                    <SectionHeader 
                        title="Program Skills"
                    />
                    <Row>
                        <Col size="lg-2"></Col>
                        <Col size="lg-8">
                            <Skill
                                skillLevel={Data.resume.skills[4].level}
                                skill={Data.resume.skills[4].name}
                            />
                            {/* <div style={box} className="wow fadeInLeft">
                                <div>
                                    <div style={{ paddingBottom: '40px', paddingTop: '10px', transform: 'scale(1)', transition: 'all 0.3s ease-in-out 0.2s', background: `linear-gradient(to right, #666666 ${percent}%, lightgray ${percent}% ${remainder}%)`}}>
                                        <div>
                                            <h4 style={h4}>
                                                {Data.resume.skills[0].name}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </Col>
                        <Col size="lg-2"></Col>
                    </Row>
                </Section>
            </div>
        )
    }
}



export default Skills;