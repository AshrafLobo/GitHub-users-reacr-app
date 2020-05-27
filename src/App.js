import React, { useState } from 'react';
import CardList from './CardList';
import Form from './Form';

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCards = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div>
      <Form onSubmit={addNewCards} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;