import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
          <div className='h-16'>
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Layout;