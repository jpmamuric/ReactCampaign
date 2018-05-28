import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './Sidebar.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import Payments from '../../payments/Payments';
import { toggleSidebar } from '../../../../redux/actions/layout';

const Sidebar = ({ sidebar, toggleSidebar, user, history }) => {
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
            <NavLink exact to='/notes' className="sidebar-items">Notes</NavLink>
            <a className="sidebar-items" href='/api/logout'>Signout</a>
          </ul>
        </nav>
        <button className='sidebar-items-delete'> delete account </button>
      </div>
    </div>
  )
}

export const mapStateToProps = ({ layout, auth }) => {
  const { sidebar } = layout;
  const { user } = auth;
  return { sidebar, user };
}

export default connect(mapStateToProps, { toggleSidebar })(withRouter(Sidebar));
