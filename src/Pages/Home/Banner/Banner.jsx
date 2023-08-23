import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-[#07332F] mt-5 h-[500px] flex items-center justify-between px-16'>
           <div className='text-white w-1/2 '>
              <h2 className='capitalize text-4xl font-bold mb-4 leading-[50px]'>Your best medical <br/> help center </h2>
              <p className='text-xl mb-4'>Our service is always good in international area.Because we are always active and helpfull for every patient.In critical patient we always provide extra care & service.we provide our service for minimum price.</p>

              <button className='allservice-btn  bg-[#F7A582] btn text-white capitalize rounded border-none  text-xl' >All service</button>
          
           </div>

           <div className='flex justify-around items-center'>
             
                <img className='w-[250px] h-[250px] border-8 transform  -skew-x-6 translate-x-40'  src="https://shorturl.at/jFMPZ" alt="" />

                <img className='w-[250px] h-[250px] border-8 bg-gray-300 transform  -skew-x-6 translate-y-16 translate-x-12' src="https://shorturl.at/bnCY4" alt="" />

                <img className='w-[250px] h-[250px] border-8 transform  -skew-x-6 -translate-x-9 -translate-y-10' src="https://shorturl.at/eoqCN" alt="" />

                {/* <img className='w-[250px] h-[250px] border' src="https://st5.depositphotos.com/4218696/66176/i/450/depositphotos_661763350-stock-photo-happy-caucasian-senior-doctor-therapist.jpg" alt="" /> */}
              
             
           </div>
        </div>
    );
};

export default Banner;