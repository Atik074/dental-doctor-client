import React from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet/>
       
        </div>
    );
};

export default Main;