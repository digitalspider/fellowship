import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import FBC from './components/fbc/FBC'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage';
import LivePage from './components/live/LivePage';
import EventsPage from './components/events/EventsPage';
import SermonsPage from './components/sermons/SermonsPage'
import SermonSeriesPage from './components/sermons/SermonSeriesPage'
import SermonPage from './components/sermons/SermonPage'
import ContactPage from './components/contact/ContactPage'
import MembersPage from './components/members/MembersPage'
import Auth from './components/auth/Auth'
import Callback from './components/auth/Callback'
import Covid19Page from './components/covid-19/Covid19Page'
import GivingPage from './components/giving/GivingPage'

const auth = new Auth();

const handleAuthentication = (props) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props);
  }
}

function privateRoute(auth, component, props) {
  const { isAuthenticated } = auth;
  if(isAuthenticated()) {
    return component;
  } else {
    auth.logout()
    return (<Redirect to={{pathname: "/", state: { from: props.location }}} />);
  }
}

const Index = () => (
  <BrowserRouter>
    <FBC>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/live" component={LivePage}/>
      <Route path="/events" component={EventsPage}/>
      <Route path="/sermons" exact component={SermonsPage}/>
      <Route path="/sermons/series/:title" component={SermonSeriesPage}/>
      <Route path="/sermon/:sermonId/:title" component={SermonPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/covid19" component={Covid19Page}/>
      <Route path="/giving" component={GivingPage}/>
      <Route path="/members" render={(props) => privateRoute(auth, <MembersPage {...props}/>, props)}/>
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props}/>
      }}/>
    </FBC>
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));
