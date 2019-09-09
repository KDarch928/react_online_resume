import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import FlipCard from "../../components/FlipCard";

//CSS Style
const expSection = {
    padding: '60px 0 0 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden'
  };


class Portfolio extends Component {

    render () {
        return (
            <div style={expSection}>
                <Section sectionId="portfolio">
                    <SectionHeader
                        title="Portfolio"
                    />
                    <FlipCard />
                </Section>

            </div>
        )
    }

}

export default Portfolio;