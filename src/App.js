import logo from './logo.svg';
import idcard from './idboth.png';
import idcardkyson from './kyson.png';
import idcardenoch from './enoch.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={idcard} className="App-logo" alt="logo" />
        <p>
          Welcome to Dino app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book your party in seconds
        </a>

        <img src={idcardkyson} className="App-logo" alt="logo" />
        <img src={idcardenoch} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
