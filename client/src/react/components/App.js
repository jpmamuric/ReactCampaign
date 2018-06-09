import React, { Component }     from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect }              from 'react-redux';

import * as actions             from '../../redux/actions/auth';

import LazyLoad                 from './hoc/LazyLoad';
import Layout                   from './layout/Layout';
import LandingPage              from './pages/landing/Landing';
import DashboardPage            from './pages/dashboard/Dashboard';

const CreateSurveyPage = LazyLoad(()=>{
  return import('./pages/survey/CreateSurvey');
});

const EditSurveyPage = LazyLoad(()=>{
  return import('./pages/survey/EditSurvey');
});

const NotesPage = LazyLoad(()=>{
  return import('./pages/notes/Notes');
});

const NotFoundPage = LazyLoad(()=>{
  return import('./pages/notfound/NotFound');
});


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/dashboard' component={DashboardPage}/>
              <Route exact path="/dashboard/new-survey" component={CreateSurveyPage} />
              <Route exact path='/dashboard/edit/:id' component={EditSurveyPage}/>
              <Route path='/notes' component={NotesPage} />
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/notfound' component={NotFoundPage} />
              <Redirect to='/notfound' />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
