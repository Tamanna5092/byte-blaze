import React from 'react';
import Blogs from './Blogs';
import Bookmarks from './Bookmarks';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            <h1>Home page</h1>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Home;