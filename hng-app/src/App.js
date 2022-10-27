import './App.css';
import Background from './Background.js';
import Books from './Books.js';
import Design from './Design.js';
import Footer from './Footer.js';
import Python from './Python.js';
import Team from './Team.js';
import Twitter from './Twitter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id ='profile__img' src= {window.location.origin + '/me.jpg'} alt="logo" />
        <p>
          
          <h2 id='twitter'>Macharia Nyaguthii</h2>
          {/* <h2 id='slack'>Moni</h2> */}
        </p>
       </header> 
      
       <Twitter />  
       <Team />
       <Books/>
       <Python />
       <Background/>
      <Design />
      <Footer />
     
     
    
     
    </div>
  );
}

export default App;
