import React from 'react';

const ServiceTabCategory = ({itemCategory}) => {
    const {service_title ,img ,details} = itemCategory
    return (
        <div>
            <img className='w-1/3 border-2 my-10' src={img} alt="" />
            <h2 className='text-2xl font-medium capitalize mb-3'>{service_title}</h2>
            <p className='text-[19px] leading-7'>{details}</p>
        </div>
    );
};

export default ServiceTabCategory;