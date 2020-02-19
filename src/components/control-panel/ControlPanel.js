import React, { Component } from 'react';
import './ControlPanel.css';
import FormatActions from '../format-actions/FormatActions';

const ControlPanel = props => {
    return (
        <div id="control-panel">
            <FormatActions selectedWord={props.selectedWord} onWordUpdated={props.onWordUpdated} />
        </div>
    );
}

export default ControlPanel;
