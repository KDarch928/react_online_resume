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

    isMobile = () => {
        var deviceType = "";
        var userAgent = navigator.userAgent;

        if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
            deviceType = "Moblie";
        } else {
            deviceType = "Desktop";
        }

        return deviceType;
    }

    render () {
        return (
            <div style={expSection}>
                <Section sectionId="portfolio">
                    <SectionHeader
                        title="Portfolio"
                    />
                    <div>
                        {this.isMobile()}
                    </div>
                    {/* <FlipCard /> */}
                </Section>

            </div>
        )
    }

}

export default Portfolio;