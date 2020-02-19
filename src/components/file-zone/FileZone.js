import React, { useRef } from 'react';
import './FileZone.css';
import PopupHelper from '../popup-helper/PopupHelper';
import Popover from 'react-text-selection-popover';

const FileZone = props => {
    const popoverRef = useRef();
    const handleSelect = () => {
        const { onWordSelected } = props;
        if (window.getSelection) {
            let selectedWord = window.getSelection().toString();
            let reference = window.getSelection().baseNode.parentNode;
            if (reference.id !== 'text') {
                while (reference.parentNode.id !== 'text') {
                    reference = reference.parentNode;
                }
                selectedWord = reference.outerHTML;
            }
            onWordSelected(selectedWord);
        }
    };
    return (
        <div id="file-zone">
            <div id="file">
                <div ref={popoverRef} id="text" contentEditable="true" onSelect={handleSelect} dangerouslySetInnerHTML={{__html: props.text}} />
                <Popover selectionRef={popoverRef}>
                    <PopupHelper selectedWord={props.selectedWord} onWordUpdated={props.onWordUpdated} />
                </Popover>
            </div>
        </div>
    );
}

export default FileZone;
