
import './App.css';
import { BrowserRouter as Router,  Switch, Route, NavLink } from 'react-router-dom'
import Battle from './components/battle/Battle'
import Gallery from './components/gallery/Gallery'
import Upload from './components/gallery/Upload'
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
		<NavLink to="/upload"> Upload</NavLink>
                </nav>
            
      </header>
      <main>
                <Switch>
                    
                    <Route path="/battle"> <Battle /></Route>
                    <Route path="/gallery"> <Gallery /></Route>
                    <Route path="/stats"> <Statistics /></Route> 
                    <Route path="/history"> <History/></Route>
					<Route path="/upload"> <Upload/></Route>
                    <Route path="/"> <Home /></Route>
                </Switch>
            </main>
    </div>
    </Router>
  );
}
 
export default App;
