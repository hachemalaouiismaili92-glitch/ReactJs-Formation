import logo from './logo.svg';
import './App.css';
import Botona from './Button/Button';
import Profile from './Profile-card/Profile-card';
import ShoppingList from './Conditional-Rendring/Conditional-Rendring';
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Botona count={count} onClick={handleClick} />
      <Botona count={count} onClick={handleClick} />

      <h1>Profile </h1>
      <Profile />
      <h1>Shopping List</h1>
      <ShoppingList />
    </div>
  );
}




