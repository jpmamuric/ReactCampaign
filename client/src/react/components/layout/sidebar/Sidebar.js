import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import Payments from '../../payments/Payments';
import * as actions from '../../../../redux/actions/layout';

const Sidebar = ({ sidebar, toggleSidebar, user }) => {
  return (
    <div className=''>
      <Backdrop open={sidebar} close={()=>toggleSidebar(false)}/>
      <div className={ sidebar ? "sidebar sidebar-open" : " sidebar sidebar-close" } >
        <nav >
          {!user ? null : (
            <div className='sidebar-profile'>
              <h4 className='sidebar-profile-name'>{user.googleName}</h4>
              <div className='sidebar-profile-box'>
                <div className='sidebar-profile-credits'>
                  Credits for campaigns: { user.skipped ? 0 : user.credits }
                </div>
                <Payments />
              </div>

            </div>
          )}
          <ul className='sidebar-list' onClick={()=>toggleSidebar(false)}>
            <NavLink exact to='/dashboard' className="sidebar-items">Home</NavLink>
            <NavLink exact to='/forum' className="sidebar-items">Forum</NavLink>
            <a className="sidebar-items" href='/api/logout'>Signout</a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export const mapStateToProps = ({ layout, auth }) => {
  const { sidebar } = layout;
  const { user } = auth;
  return { sidebar, user };
}

export default connect(mapStateToProps, actions )(Sidebar);
