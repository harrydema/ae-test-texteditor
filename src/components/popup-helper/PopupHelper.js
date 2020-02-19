import React, { useState, useEffect } from 'react';
import './PopupHelper.css';
import FormatActions from '../format-actions/FormatActions';
import stripHtml from 'string-strip-html';
import SynonymsService from '../../services/resources/SynonymsService';

const PopupHelper = props => {
  const [loadingSynonyms, setLoadingSynonyms] = useState(false);
  const [synonyms, setSynonyms] = useState([]);
  useEffect(() => {
    const getSynonyms = async () => {
      try {
        setLoadingSynonyms(true);
        const response = await SynonymsService.getSynonyms(
          stripHtml(props.selectedWord)
        );
        setSynonyms(response);
        setLoadingSynonyms(false);
      } catch (error) {
        console.error(error.message);
        setLoadingSynonyms(false);
      }
    }
    getSynonyms();
  }, [props.selectedWord]);

  const handleSynonymClick = synonym => {
    const { selectedWord } = props;
    const newWord = selectedWord.replace(/^\w+|(?<=>)\w+(?=\<)/, synonym);
    props.onWordUpdated(newWord);
  };
  
  return (
      <div id="popup-helper">
        <FormatActions selectedWord={props.selectedWord} onWordUpdated={props.onWordUpdated} />
        <div>
          {loadingSynonyms ? (
            <div>
              Loading...
            </div>
          ) : (
            <div>
              {synonyms.map(synonym => (
                <button 
                  key={synonym.word}
                  onClick={() => handleSynonymClick(synonym.word)}
                >
                  {synonym.word}
                </button>
              ))}
            </div>
          )}
        </div>      
      </div>
  );
}

export default PopupHelper;
