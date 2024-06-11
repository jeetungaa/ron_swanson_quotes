import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote} className="new-quote-button">Get New Quote</button>
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
