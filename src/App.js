import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/index';
import Intro from './components/Intro/index';
import About from './components/About/index';
import Exp from './pages/Experience/index';
import Ed from './pages/Education/index';
import Quote from './pages/Quote/index';
import Skills from './pages/Skills';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a> */}
//         </header>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <div className="container">
      <Nav />
    </div>
    <Intro />
    <main id="main">
      <About />
      <Exp />
      <Ed />
      <Quote />
      <Skills />
    </main>

  </div>
);

export default App;
