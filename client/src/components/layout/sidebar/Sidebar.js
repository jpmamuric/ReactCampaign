import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import './Sidebar.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import * as actions from '../../../actions/layout';

const Sidebar = ({ sidebar, toggleSidebar }) => {
  return (
    <div className=''>
      <Backdrop open={sidebar} close={()=>toggleSidebar(false)}/>
      <div className={ sidebar ? "sidebar sidebar-open" : " sidebar sidebar-close" } >
        <div className="">
            Logo
        </div>
        <nav>
          <ul className="" onClick={()=>toggleSidebar(false)}>
            <NavLink exact to='/dashboard' className="">Home</NavLink>
            <a className="" href='/api/logout'>Signout</a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export const mapStateToProps = ({ layout }) => {
  const { sidebar } = layout;
  return { sidebar };
}

export default connect(mapStateToProps, actions )(Sidebar);
