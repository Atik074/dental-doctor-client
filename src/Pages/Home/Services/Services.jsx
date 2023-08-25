import React from 'react';
import useServices from '../../Hooks/UseServices';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ServicesTab from './ServicesTab';
import {GoClock,GoLocation} from 'react-icons/Go';  
import { FaOdnoklassniki } from 'react-icons/fa'


const Services = () => {
    const [services] = useServices([])
    console.log(services)

    const cavityServices = services.filter(service =>service.services_type == 'cavity protection')
    const cosmeticServices = services.filter(service =>service.services_type == 'cosmetic dentisty')
    const SurgeryServices = services.filter(service =>service.services_type == 'oral surgery')

  


    return (
      <div className='px-16'>
         <div className='flex space-x-10  items-center  mt-28 mb-10'>
            <div className='w-full'>
                <img className='rounded h-screen' src="https://thumbs.dreamstime.com/b/female-dentist-stethoscope-clinic-29664712.jpg" alt="" />
            </div>
        <div>
              <h1 className='text-4xl font-bold mb-2'>Our Services</h1>
            <p className='text-[19px] mb-8 '>One of the most significant improvements for dental practices has been implementing two-way text messaging with their patients. It's no surprise that this form of communication is still the most popular, thanks to smart devices like mobile phones and tablets.Check out these top ten ways that text messaging can benefit your practice</p>
        <div>
          
   {/* react tab  */}
   <Tabs>
    <TabList>
      <Tab>
        <button className='bg-[#f66c31] capitalize px-2 py-[10px] text-lg rounded font-medium'>Cavity Protection</button>
      </Tab>
      <Tab>
        <button className='bg-[#f66c31] capitalize px-2 py-[10px] text-lg rounded font-medium '>Cosmetic Dentisty</button>
      </Tab>
      <Tab>
        <button className='bg-[#f66c31] capitalize px-2 py-[10px] text-lg rounded font-medium'>Oral Surgery</button>
      </Tab>
    </TabList>

    <TabPanel>
      <ServicesTab service={cavityServices} ></ServicesTab>
    </TabPanel>
    <TabPanel>
    <ServicesTab service={cosmeticServices}></ServicesTab>
    </TabPanel>
    <TabPanel>
    <ServicesTab service={SurgeryServices}></ServicesTab>
    </TabPanel>
  </Tabs>
            </div>
        </div>

     </div>


    {/* three card desing */}
    <div className='my-16 flex space-x-10 justify-center items-center text-white'>
       <div className='flex bg-[#07332F] px-8 p-4 justify-center items-center w-[364px] h-[202px] rounded-xl'>
          <p className='text-4xl -mt-12'><GoClock></GoClock></p>
        <div className='ml-5'>
          <h3 className='text-[23px]  font-bold mb-1 '>Openign Hours</h3>
          <p className='text-[18px]'>Open 9.00 am to 5.00pm <br/> Everyday</p>
        </div>
      </div>

     <div className='flex bg-[#F7A582] px-8 p-4 justify-center items-center
     w-[364px] h-[202px] rounded-xl'>
          <p className='text-4xl -mt-12'><GoLocation></GoLocation></p>
       <div className='ml-5'>
          <h3 className='text-[23px]  font-bold mb-1'>Our Locations</h3>
          <p className='text-[18px]'>Dhanmondi 17, Dhaka <br/> -1200, Bangladesh</p>
      </div>
    </div>

    <div className='flex bg-[#07332F] w-[364px] h-[202px] px-8 p-4 justify-center items-center  rounded-xl'>
          <p className='text-4xl -mt-12'><FaOdnoklassniki></FaOdnoklassniki></p>
        <div className='ml-5'>
          <h3 className='text-[23px]  font-bold mb-1'>Contact Us</h3>
          <p className='text-[18px]'>+8801642095105</p>
          <p className='text-[18px]'>+8801758555574</p>
        </div>
      </div>
  </div>

  </div>
    );
};

export default Services;