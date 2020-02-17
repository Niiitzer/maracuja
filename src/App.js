import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import styled from 'styled-components';
import Tabbar from './components/Tabbar'

function App() {
  console.log(React.version);

  return (
    <Router>
      <Tabbar links={['/yellow', '/red', '/green']} />
      <div>
        <Switch>
          <Route path="/red">
            <Red />
          </Route>
          <Route path="/yellow">
            <Yellow />
          </Route>
          <Route path="/green">
            <Green />
          </Route>
          <Route path="/cherry">
            <Cherry />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




//Routes DOM
const Yellow = () => {
  return (
    <div>
      <h2>Lemon</h2>
      <h2>Banana</h2>
      <h2>Apricot</h2>
    </div>
  );
}

const Green = () => {
  return (
    <div>
      <h2>Pear</h2>
      <h2>Kiwi</h2>
      <h2>Avocado</h2>
    </div>
  );
}

const Red = () => {
  return (
    <div>
      <h2>Strawberry</h2>
      <h2>Blueberry</h2>
      <h2><Link to="/cherry">Cherry</Link></h2>
    </div>
  );
}


//Define the button for /cherry & /
const Button = styled.button`
        text-align: center;
        font-size: 1em;
        padding: 0.25em 1em;
        border: none;
        border-radius: 3px;        
    `


const Home = () => {
  return (
    <div>
      <Button><Link to="/yellow">Enter</Link></Button>
    </div>
  );
}

const Cherry = withRouter((props) => {

  return (
    <div>
      <p>Welcome in the Cherry World</p>
      <Button onClick={props.history.goBack}>Back</Button>
    </div>
  );
})



export default App;
