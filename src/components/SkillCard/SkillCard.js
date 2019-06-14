import React, { Component } from 'react';


const box = {
    padding: '40px',
    marginBottom: '30px',
    boxShadow: '0px 0px 30px rgba(73, 78, 92, 0.15)',
    background: '#fff',
    transition: '0.4s'
};

const pad = {
    margin: '30px 0 0 0'
};

const h4 = {
    fontWeight: '700',
    marginTop: '5px',
    marginBottom: '15px',
    marginLeft: '40px',
    fontSize: '18px',
    float: 'left',
    textTransform: 'uppercase',
    color: '#fff'
};

var styles = {
    mouseHover: {
        color: '#1aa0cd',
        display: 'block'
    },
    mouseLeave: {
        color: '#666666',
        display: 'none'
    }

};


class SkillCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bar_state: 'mouseLeave'
        };
    }

    changeColor = () => {
        this.setState({
            bar_state:'mouseHover'
        });
    }

    resetColor = () => {
        this.setState({
            bar_state:'mouseLeave'
        });
    }

    calculateRemainder = (percent) => {
        let remainder = 100 - percent;
        return remainder;
    }


    render () {

        let percent = this.props.skillLevel;
        let remainder = this.calculateRemainder(percent);
        let barColor = styles[this.state.bar_state]
    

        return (
            <div style={pad} className="wow fadeInLeft">
            
                <div style={{ paddingBottom: '40px', paddingTop: '10px', transform: 'scale(1)', transition: 'all 0.3s ease-in-out 0.2s', background: `linear-gradient(to right, ${barColor.color} ${percent}%, lightgray ${percent}% ${remainder}%)`}}
                    onMouseEnter={this.changeColor.bind(this)}
                    onMouseLeave={this.resetColor.bind(this)}
                >
                    <div>
                        <h4 style={h4}>
                            {this.props.skill}
                        </h4>
                        <div style={{display: `${barColor.display}`, color: '#fff', float: 'right', paddingRight: `${(remainder + 2)}%`, marginTop: '3px'}}>
                            {percent}%
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
};

export default SkillCard;