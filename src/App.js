import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUsers from './components/CreateUsers';
import DetailUser from './components/DetailUser';
import ListUsers from './components/ListUsers';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ListUsers}></Route>
        <Route exact path="/home" component={ListUsers}></Route>
        <Route exact path="/add" component={CreateUsers}></Route>
        <Route exact path="/detail/:id" component={DetailUser}></Route>
      </Switch>
    );
  }
}

export default App;
