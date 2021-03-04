
import Navbar from './components/Navbar.js'
import Resume from './components/pages/Resume.js'
import Footer from './components/Footer.js'
import Home from './components/pages/Home.js'
import Portfolio from './components/pages/Portfolio.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound.js'


function App() {

  return (  
    <Router>
    <div className="App">
      <Navbar />
     </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/Home">
            <Home />
          </Route> 
          <Route path="/Resume">
            <Resume />
          </Route> 
          <Route path="/Portfolio">
            <Portfolio />
          </Route>                
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <div className="App">
      <Footer />
     </div>
    </Router>
  );
}


export default App;