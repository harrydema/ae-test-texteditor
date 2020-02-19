import React from 'react';
import './FormatActions.css';
import HTMLFormatter from '../../utils/html-formatter';

const FormatActions = props => {
    const handleClick = type => {
        const { selectedWord, onWordUpdated } = props;
        let newWord = null;
        switch (type) {
            case 'bold':
                newWord = HTMLFormatter.boldWord(selectedWord);
                break;
            case 'italic':
                newWord = HTMLFormatter.italicWord(selectedWord);
                break;
            case 'underline':
                newWord = HTMLFormatter.underlineWord(selectedWord);
                break;
            default:
                console.error('Type of format not supported');
        }
        if (newWord) {
          onWordUpdated(newWord);
        }
        
    }

    return (
      <div id="format-actions">
          <button 
            style={{
              backgroundColor: HTMLFormatter.isBold(props.selectedWord) ? 'gray' : 'white'
            }}
            className="format-action"
            type="button"
            onClick={() => handleClick('bold')}
          >
            <b>B</b>
          </button>
          <button
            style={{
              backgroundColor: HTMLFormatter.isItalic(props.selectedWord) ? 'gray' : 'white'
            }}
            className="format-action"
            type="button"
            onClick={() => handleClick('italic')}>
              <i>I</i>
            </button>
          <button
            style={{
              backgroundColor: HTMLFormatter.isUnderline(props.selectedWord) ? 'gray' : 'white'
            }}
            className="format-action"
            type="button"
            onClick={() => handleClick('underline')}>
              <u>U</u>
            </button>
      </div>
    );
}

export default FormatActions;
