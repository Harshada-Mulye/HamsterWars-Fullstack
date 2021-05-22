
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Battle from './components/battle/Battle'
import Gallery from './components/gallery/Gallery'
import History from './components/history/History'
import Statistics from './components/statistics/Statistics'
import Home from './components/home/Home'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
         
      <nav>
      <NavLink to="/"> Home </NavLink>
        <NavLink to="/battle"> Battle </NavLink>
        <NavLink to="/gallery"> Gallery </NavLink>
        <NavLink to="/stats"> Stastics </NavLink>
        <NavLink to="/history"> History</NavLink>
                </nav>
            
      </header>
      <main>
                <Switch>
                    
                    <Route path="/battle"> <Battle /></Route>
                    <Route path="/gallery"> <Gallery /></Route>
                    <Route path="/stats"> <Statistics /></Route> 
                    <Route path="/history"> <History/></Route>
                    <Route path="/"> <Home /></Route>
                </Switch>
            </main>
    </div>
    </Router>
  );
}
 
export default App;
