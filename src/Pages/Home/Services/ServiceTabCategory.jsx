import React from 'react';
import { Link } from 'react-router-dom';

const ServiceTabCategory = ({itemCategory}) => {
    const {service_title ,img ,details} = itemCategory
    return (
    <div>  
        <div>
         
         <img className='w-1/3  border-2 mt-8' src={img} alt="" />
        <h2 className='text-2xl font-medium capitalize my-3'>{service_title}</h2>
        <p className='text-[19px] leading-7 mb-3'>{details}</p>
        <button className=' capitalize p-2 text-lg rounded-lg font-medium text-[#e89a79] border border-[#e89a79]'>
             <Link to='/'>More details</Link>
             </button>
        </div>

    </div>
    );
};

export default ServiceTabCategory;