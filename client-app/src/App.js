import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import About from './components/About'
import Graphs from './components/Graphs'
import Add from './components/Add'
import Map from './components/Map'
import Details from './components/Details'
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/details"><Details/></Route>
          <Route path="/add"><Add/></Route>
          <Route path="/map"><Map/></Route>
          <Route path="/"><Graphs/></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Navigation()
{

    return(
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Measurements are fun</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as ={Link} to="/">Home</Nav.Link>
          <Nav.Link as ={Link} to="/map">Map</Nav.Link>
          <Nav.Link as ={Link} to="/details">Details</Nav.Link>
          <Nav.Link as ={Link} to="/add">Add sensors</Nav.Link>
          <Nav.Link as ={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    )

}


export default App;
