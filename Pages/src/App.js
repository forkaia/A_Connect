import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { MyOrganizations } from './MyOrganizations';
import { Notifications } from './Notifications';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import { CardSection } from './components/CardSection';
import { CardColumns } from 'react-bootstrap/Card';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './Profile';
import { Timeline } from './Timeline';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />

          <Router>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/MyOrganizations" component={MyOrganizations} />
              <Route path="/Notifications" component={ Notifications } />
              <Route path="/Timeline" component={ Timeline } />
              <Route component={NoMatch} />
            </Switch>
          </Router>

        <Footer />
      </React.Fragment>
  );  
  }
  
}

export default App;
