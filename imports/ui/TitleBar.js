import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component{
    classChange(e){
        e.target.classList.add('shake');
    }

    mouseLeave(e){
        e.target.classList.remove('shake');
    }

    render(){
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1 className="animated" onMouseOver={this.classChange} onMouseLeave={this.mouseLeave}>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title : PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title : "default title"
}

export default TitleBar;