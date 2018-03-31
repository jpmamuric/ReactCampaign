import 'materialize-css/dist/css/materialize.min.css';
import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect }              from 'react-redux';
import * as actions             from '../actions/auth';
import Header                   from './Header';
import LandingPage              from './pages/Landing';
import DashboardPage            from './pages/Dashboard';
import SurveyPage              from './pages/Survey'


// <img src={require("../assets/images/google-sign-in.png")} />
class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/dashboard' component={DashboardPage}/>
            <Route path="/dashboard/new-survey" component={SurveyPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
