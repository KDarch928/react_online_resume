import React, { Component } from 'react';
import Data from '../../data.json';
import { SectionFluid, SectionHeader} from "../Section";

const aboutSection = {
    padding: '60px 0',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'hidden',
    background: '#eff5f5'
  };
  
  const aboutImg = {
    height: '510px',
    overflow: 'hidden',
  };
  
  const image =  {
    marginLeft: '-15px',
    maxWidth: '100%',
    height: '510px',
    overflow: 'hidden'
  };
  
const aboutDiv = {
    height: 'auto'
};
  

  
  const p  = {
    lineHeight: '26px'
  };



class About extends Component {

    render () {

        return (
            <div style={aboutSection}>
                <SectionFluid sectionId="about">
                    <SectionHeader
                        title="About"
                    />

                    <div className="row">
                      <div className="col-lg-6 animated fadeInLeft text-center" id="anima-delay" style={aboutDiv}>
                        <img src={'img/' + Data.main.image} alt="Kayle Drucker" style={image}/>
                      </div>

                      <div className="col-lg-6 content animated fadeInRight">
                        <p style={p}>
                            {Data.about.bio[0]}
                        </p>

                        <p style={p}>
                            {Data.about.bio[1]}
                        </p>
                      </div>
                    </div>
                </SectionFluid>
            </div>
        )
    }

}

export default About;