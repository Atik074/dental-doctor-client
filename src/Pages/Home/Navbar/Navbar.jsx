import React from 'react';
import { AiFillSetting} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#07332F] py-10 justify-between px-16">
        <div className='flex items-center '>
           <p className='text-white text-4xl'><AiFillSetting/></p>
          <h2 className="font-bold text-2xl text-white"><span className='text-[#F7A582] mx-2'>Doc </span>House</h2>
            </div>
        <div className="text-white">
            <ul className='flex text-[18px] font-medium '>
                <li className='mx-4'><Link to='/'>Home</Link></li>
                <li className='mx-4'><Link to='/'>About</Link></li>
                <li className='mx-4'><Link to='/'>Appointment </Link></li>
                <li className='mx-4'><Link to='/signin'>Login</Link></li>
            </ul>
        </div>

      </div>
    );
};

export default Navbar;