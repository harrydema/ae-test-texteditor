import React from 'react';
import './FormatActions.css';
import HTMLFormatter from '../../utils/html-formatter';

const actions = [
  {
    label: (<b>B</b>),
    isActive: selectedWord => HTMLFormatter.isBold(selectedWord),
    applyFormat: HTMLFormatter.boldWord,
  },
  {
    label: (<i>I</i>),
    isActive: selectedWord => HTMLFormatter.isItalic(selectedWord),
    applyFormat: HTMLFormatter.italicWord,
  },
  {
    label: (<u>U</u>),
    isActive: selectedWord => HTMLFormatter.isUnderline(selectedWord),
    applyFormat: HTMLFormatter.underlineWord,
  }
];

const FormatActions = props => {
    const handleClick = applyFormat => {
        const { selectedWord, onWordUpdated } = props;
        let newWord = applyFormat(selectedWord);
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
              onClick={() => handleClick(action.applyFormat)}
            >
              {action.label}
            </button>
          ))}
      </div>
    );
}

export default FormatActions;
