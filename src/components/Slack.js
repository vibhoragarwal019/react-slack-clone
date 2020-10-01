import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainConatiner from './MainContainer';

class Slack extends Component {
    render() {
        return (
            <div id="slack">
                <Sidebar />
                <MainConatiner />
            </div>
        )
    }
}
export default Slack;