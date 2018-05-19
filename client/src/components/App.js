import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect }              from 'react-redux';
import * as actions             from '../actions/auth';
import Header                   from './layout/header/Header';
import LandingPage              from './pages/landing/Landing';
import DashboardPage            from './pages/dashboard/Dashboard';
import SurveyPage              from './pages/survey/Survey'

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
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
