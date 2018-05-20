import React,{  Component} from 'react';
import { connect }         from 'react-redux';
import { Link }            from 'react-router-dom';

// import StripePayments      from './Payments';
import './Header.css';
import menu from '../../../assets/menu.png';
import * as actions from '../../../actions/layout';


class Header extends Component {
  renderLinks(){

    const { user, toggleSidebar } = this.props
    switch (user) {
      case null:
        return <div>loading...</div>
      case false:
        return <a href='/auth/google' className='sign_in'>Signin with Google</a>
      default:
        return (
          <img src={menu} alt='menu' className='header-menu' onClick={ ()=>toggleSidebar(true)}/>
        )
    }
  }

  render(){
    return (
        <header className="header">
          <Link to={this.props.user ? '/dashboard' : '/' } className='logo'>
            React Campaign
          </Link>
          { this.renderLinks() }
        </header>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
}

export default connect(mapStateToProps, actions)(Header);


// <div style={{ padding: 5}}>
// <div>Credits: { user.credits }</div>
// <StripePayments />
// <a href='/api/logout' style={{ color: 'black'}}>Signout</a>
// </div>
