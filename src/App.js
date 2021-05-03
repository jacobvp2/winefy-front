import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './Views/Landing';
import Quiz from './Views/Quiz';
import Choice from './Views/Choice';
import Twitter from './Views/Twitter';
import Results from './Views/Results';
import Wines from './Views/Wines';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setAnswers] = useState({})
  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path='/quiz/:id'>
            <Quiz answers={answers} setAnswers={setAnswers}/>
          </Route>
          <Route path='/choice'>
            <Choice />
          </Route>
          <Route path='/twitter'>
            <Twitter username={username} setUsername={setUsername} />
          </Route>
          <Route path='/results/:id'>
            <Results />
          </Route>
          <Route path='/wines'>
           <Wines />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;