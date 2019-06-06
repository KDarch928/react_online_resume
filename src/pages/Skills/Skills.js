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

    render () {



        return (
            <div style={skillSection}>
                <Section sectionId="skills">
                    <SectionHeader 
                        title="Program Skills"
                    />
                    <Row>
                        <Col size="lg-2"></Col>
                        <Col size="lg-8">

                            {Data.resume.skills.map(skil => (
                                <Skill
                                    skillLevel={skil.level}
                                    skill={skil.name}
                                />
                            ))}
                        </Col>
                        <Col size="lg-2"></Col>
                    </Row>
                </Section>
            </div>
        )
    }
}



export default Skills;