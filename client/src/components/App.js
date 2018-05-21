import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect }              from 'react-redux';
import * as actions             from '../actions/auth';
import Layout                   from './layout/Layout';
import LandingPage              from './pages/landing/Landing';
import DashboardPage            from './pages/dashboard/Dashboard';
import CreateSurveyPage         from './pages/survey/CreateSurvey';
import EditSurveyPage           from './pages/survey/EditSurvey';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/dashboard' component={DashboardPage}/>
            <Route path="/dashboard/new-survey" component={CreateSurveyPage} />
            <Route path='/dashboard/:id' component={EditSurveyPage}/>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
