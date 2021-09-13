import React from 'react'
import HomePage from './Components/Homepage';
import EditEmployee from './Components/EditEmployee';
import Details from './Components/Details';
import CreateEmployee from './Components/CreateEmployee';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
        <Route path ="/" exact component = {HomePage} />
        <Route path ="/details/:id" component ={Details} />
        <Route path ="/delete/:id" component ={HomePage} />
        <Route path ="/add" component ={CreateEmployee} />
        <Route path ="/edit/:id" component ={EditEmployee} />
        </Switch>
      </Router>
    )
  }
}
export default App
