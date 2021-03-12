import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Neutron Technologies</p>
        <ButtonGroup>
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
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
