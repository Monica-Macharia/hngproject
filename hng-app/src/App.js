import './App.css';
import Background from './Backgroung.js';
import Books from './Books.js';
import Design from './Design.js';
import Footer from './Footer.js';
import Profile from './Profile.js';
import Python from './Python.js';
import Team from './Team.js';
import Twitter from './Twitter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Background/>
      <Books/>
      <Design />
      <Footer />
      <Profile />
      <Python />
      <Team />
      <Twitter />
    </div>
  );
}

export default App;
