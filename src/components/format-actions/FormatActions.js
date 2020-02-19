import React from 'react';
import './FormatActions.css';
import HTMLFormatter from '../../utils/html-formatter';

const actions = [
  {
    label: (<b>B</b>),
    type: 'bold',
    isActive: selectedWord => HTMLFormatter.isBold(selectedWord),
  },
  {
    label: (<i>I</i>),
    type: 'italic',
    isActive: selectedWord => HTMLFormatter.isItalic(selectedWord),
  },
  {
    label: (<u>U</u>),
    type: 'underline',
    isActive: selectedWord => HTMLFormatter.isUnderline(selectedWord),
  }
];

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
          {actions.map(action => (
            <button 
              style={{
                backgroundColor: action.isActive(props.selectedWord) ? 'gray' : 'white'
              }}
              className="format-action"
              type="button"
              onClick={() => handleClick(action.type)}
            >
              {action.label}
            </button>
          ))}
      </div>
    );
}

export default FormatActions;
