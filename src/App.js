import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Navigation from './Shared/Navigation/Navigation';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Project from './Pages/Project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          <Route exact path="/projects/:Id">
            <Project></Project>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
