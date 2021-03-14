import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Neutron Technologies</p>
        <div className="ButtonGroup">
          <a
            className="NeutronButton"
            href="https://github.com/neutrontechnologies"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out our organization!"
          >
            <button>Organization page</button>
          </a>
          &nbsp;
          <a
            className="NeutronButton"
            href="https://discord.gg/HYrafUqq73"
            target="_blank"
            rel="noopener noreferrer"
            title="Join our Discord server!">
            <button>Discord</button>
          </a>
          <div class="webring">Proud member of Zoomer Hacking.<br /><a href="https://devnol.github.io/">&lt;- Prev</a> | <a href="https://stephenvk.xyz/ring/">All</a> | <a href="https://oscie.tk/">Next -&gt;</a></div>
        </div>
      </header>
    </div>
  );
}

export default App;
