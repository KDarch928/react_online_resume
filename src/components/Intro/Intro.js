
import React, { Component } from 'react';
import Data from '../../data.json';

// CSS Styling
const sectionStyle = {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to right bottom, rgba(28, 191, 224, 0.5), rgba(33, 135, 183, 0.5)), url("img/smart_city.jpg") center top no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
};

const introText = {
    position: 'absolute',
    left: '0',
    top: '60px',
    right: '0',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column'
};

const H5 = {
    margin: '20% 0 10px 0',
    padding: '0 15px',
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '56px',
    color:'#fff'
};

const primaryBtn = {
    
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    letterSpacing: '1px',
    display: 'inline-block',
    padding: '8px 28px',
    borderRadius: '50px',
    transition: '0.5s',
    margin: '10px',
    border: '2px solid #fff',
    color: '#fff',
    background: 'none'
};

const hoveredBtn = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    letterSpacing: '1px',
    display: 'inline-block',
    padding: '8px 28px',
    borderRadius: '50px',
    transition: '0.5s',
    margin: '10px',
    border: '2px solid #fff',
    color: '#1aa0cd',
    background: '#fff'
};




class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startBtnHovering : false,
            resumeBtnHovering: false
        };
    }

    render () {

        let startBtnStyle,resumeBtnStyle;

        const handleMouseEnter = () => this.setState({startBtnHovering: true});
        const handleMouseLeave = () => this.setState({startBtnHovering:false});
        const resumeHandleMouseEnter = () => this.setState({resumeBtnHovering: true});
        const resumeHandleMouseLeave = () => this.setState({resumeBtnHovering: false});
        
        if (this.state.startBtnHovering) {
            startBtnStyle = hoveredBtn;
        } else {
            startBtnStyle = primaryBtn;
        }

        if (this.state.resumeBtnHovering){
            resumeBtnStyle = hoveredBtn;
        } else {
            resumeBtnStyle = primaryBtn;
        }

        return (
            <div>
                <section style={sectionStyle} id="into">
                    <div style={introText}>
                        <h5 style={H5}>IT Support Analyst and Web Developer</h5>
                        <a href="#about" style={startBtnStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Started</a>
                        {/* Button to Open the Modal */}
                        <a href="" style={resumeBtnStyle} onMouseEnter={resumeHandleMouseEnter} onMouseLeave={resumeHandleMouseLeave} data-toggle="modal" data-target="#resumeModal">Resume</a>
                    </div>
                </section>

                {/* The Modal */}
                 <div className="modal fade" id="resumeModal">
                     <div className="modal-dialog">
                         <div className="modal-content">
                             {/* Modal Header */}
                             <div className="modal-header">
                                 <h4 className="modal-title">Resume</h4>
                                 <button type="button" className="close" data-dismiss="modal">&times;</button>
                             </div>

                             {/* Modal Body */}
                             <div className="modal-body">
                                 <embed src="resume/Kayle_Drucker_Resume.pdf" type="application/pdf" height="400px" width="100%" className="responsive"></embed>
                             </div>

                             {/* Modal footer */}
                             <div className="modal-footer">
                                 <a href="" className="btn-res" data-dismiss="modal">Close</a>
                                 <a href="resume/Kayle_Drucker_Resume.pdf" download="Kayle_Drucker_Resume.pdf" className="btn-res">Download</a>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        )
        
    }
}

export default Intro;