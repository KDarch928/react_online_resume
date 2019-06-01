import React, { Component } from 'react';
import Data from '../../data.json';
import { Section, SectionFluid, SectionHeader} from "../../components/Section";
import EdCard from "../../components/EdCard";

//CSS Styling

const edSection = {
    padding: '60px 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden',
    background: '#eff5f5'
  };

class Education extends Component {

    handleIndex = (ind) => {
        let index = ind;
        return index;
    }
    
    render () {

        let len = Object.keys(Data.resume.education).length - 1;

        console.log(len);

        return (
            
            <div style={edSection}>
                <Section sectionId="education">
                    <SectionHeader
                        title="Education"
                    />

                    {/* <EdCard
                        school={Data.resume.education[0].name}
                        schoolUrl={Data.resume.education[0].schoolUrl}
                        url={Data.resume.education[0].url}
                        focus={Data.resume.education[0].focus}
                        icon={Data.main.icon[0].marker}
                        date={Data.resume.education[0].graduation}
                        location={Data.resume.education[0].location}
                    /> */}
                    {Data.resume.education.map((edu,index) => (
                        <EdCard
                            school={edu.name}
                            schoolUrl={edu.schoolUrl}
                            url={edu.url}
                            focus={edu.focus}
                            icon={Data.main.icon[0].marker}
                            date={edu.graduation}
                            location={edu.location}
                            ind={this.handleIndex(index)}
                            length={len}
                        />
                    ))}

                </Section>
            </div>
        )
    }
}


export default Education;