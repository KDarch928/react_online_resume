import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import ExpCard from "../../components/ExpCard";

//CSS Style
const expSection = {
    padding: '60px 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden'
  };


class Experience extends Component {

    render () {
        return (
            <div style={expSection}>
                <Section sectionId="experience">
                    <SectionHeader
                        title="Experience"
                    />
                    {/* <ExpCard
                        company={Data.resume.company[0].name}
                        location={Data.resume.company[0].location}
                        url={Data.resume.company[0].url}
                        dates={Data.resume.company[0].dates}
                        title={Data.resume.company[0].title}
                        num="1"
                        des={Data.resume.company[0].description}
                        icon={Data.main.icon[0].marker}
                    /> */}
                    {Data.resume.company.map(datum => (
                        <ExpCard
                            company={datum.name}
                            location={datum.location}
                            url={datum.url}
                            dates={datum.dates}
                            title={datum.title}
                            des={datum.description}
                            icon={Data.main.icon[0].marker}
                        />
                    ))}
                </Section>

            </div>
        )
    }

}

export default Experience;