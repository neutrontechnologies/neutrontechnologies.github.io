import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Neutron Technologies</p>
        <a
          className="Neutron-Tek"
          href="https://github.com/neutrontechnologies"
          target="_blank"
          rel="noopener noreferrer"
          title="Check out our organization!"
        >
          <button>Organization page</button>
        </a>
        
        
      </header>
    </div>
  );
}

export default App;
