import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions/auth';
import Layout                   from './layout/Layout';
import LandingPage              from './pages/landing/Landing';
import DashboardPage            from './pages/dashboard/Dashboard';
import CreateSurveyPage         from './pages/survey/CreateSurvey';
import EditSurveyPage           from './pages/survey/EditSurvey';
import ForumPage                from './pages/forum/Forum';

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
            <Route exact path="/dashboard/new-survey" component={CreateSurveyPage} />
            <Route path='/dashboard/:id' component={EditSurveyPage}/>
            <Route path='/forum' component={ForumPage} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
