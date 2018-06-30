import React, { Component } from 'react';

export default class RegulationIteam extends Component {

    render() {
        const { regulation } = this.props;
        
        return (
        <div>
            <p>{regulation.summary}</p>
        </div>
        )
    }
}