import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        return(
            <div className="Avatar">
                <img src={this.props.url} width={this.props.width} className={this.props.shape === "circle" ? "circle" : "square"} alt="Dog" />
            </div>
        )
    }
}

export default Avatar;