import React from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation()
    console.log(location)
    const withoutHeaderFooter = location.pathname.includes('/signin') || location.pathname.includes('/signUp')
    return (
        <div>
              {withoutHeaderFooter ||<Navbar></Navbar> }
             
            <Outlet/>
       
        </div>
    );
};

export default Main;