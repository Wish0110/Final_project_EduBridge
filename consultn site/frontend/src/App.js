import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
/*import Home from '';
import About from '';
import Service from '';
import Help from '';*/

function App() {
  return (
    <Router>
      <Navbar />
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={About} />
        <Route path="/" component={Service} />
        <Route path="/help" component={Help} />
      </Switch>*/}
    </Router>
  );
}

export default App;