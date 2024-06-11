import React from 'react';
import './SavedQuotes.css';

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {savedQuotes.length === 0 ? (
        <p>No saved quotes yet.</p>
      ) : (
        <ul>
          {savedQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
