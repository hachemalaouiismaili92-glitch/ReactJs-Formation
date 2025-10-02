import logo from './logo.svg';
import './App.css';
import Botona from './Button/Button';
import Profile from './Profile-card/Profile-card'; 

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Botona />
      <h1>Profile </h1>
      <Profile />
    </div>
  );
}




