import React,{  Component} from 'react';
import { connect }         from 'react-redux';
import { Link }            from 'react-router-dom';

import StripePayments      from './Payments';
import './App.css';

class Header extends Component {
  renderLinks(){
    const { user } = this.props
    switch (user) {
      case null:
        return <div>loading...</div>
      case false:
        return <a href='/auth/google' className='sign_in'>Signin with Google</a>
      default:
        return (
          <div style={{ padding: 5}}>
            <div>Credits: { user.credits }</div>
            <StripePayments />
            <a href='/api/logout' style={{ color: 'black'}}>Signout</a>
          </div>
        )
    }
  }

  render(){
    return (
      <div className="App-container">
        <div className="App-header" style={{ paddingLeft: 10}}>
          <h5>
            <Link to={this.props.user ? '/dashboard' : '/' }>
              React Campaign
            </Link>
          </h5>
          { this.renderLinks() }
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
}

export default connect(mapStateToProps)(Header);
