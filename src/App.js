import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/aboutMe';
import Contact from './pages/contact';
import MyPortfolio from './pages/myPortfolio';
import Wrapper from './components/Wrapper';




function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/myportfolio" component={MyPortfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
