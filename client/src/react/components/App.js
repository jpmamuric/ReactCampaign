import React, { Component }     from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions/auth';
import Layout                   from './layout/Layout';
import LandingPage              from './pages/landing/Landing';
import DashboardPage            from './pages/dashboard/Dashboard';
import CreateSurveyPage         from './pages/survey/CreateSurvey';
import EditSurveyPage           from './pages/survey/EditSurvey';
import NotesPage                from './pages/notes/Notes';
import PostEdit                 from './posts/PostEdit';

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
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/dashboard' component={DashboardPage}/>
              <Route exact path="/dashboard/new-survey" component={CreateSurveyPage} />
              <Route path='/dashboard/:id' component={EditSurveyPage}/>
              <Route exact path='/notes' component={NotesPage} />
              <Route path='/notes/:id' component={PostEdit} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
