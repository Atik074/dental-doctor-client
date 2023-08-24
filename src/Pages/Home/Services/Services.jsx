import React from 'react';
import useServices from '../../Hooks/UseServices';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ServicesTab from './ServicesTab';

const Services = () => {
    const [services] = useServices([])
    console.log(services)

    const cavityServices = services.filter(service =>service.services_type == 'cavity protection')

    const cosmeticServices = services.filter(service =>service.services_type == 'cosmetic dentisty')
    const SurgeryServices = services.filter(service =>service.services_type == 'oral surgery')

  


    return (
        <div className='flex space-x-11'>
            <div>
                <img className='h-[500px] w-[1260px]' src="https://shorturl.at/dGIO7" alt="" />
            </div>
        <div>
                  <h1 className='text-2xl font-bold mb-2'>Our Services</h1>
                  <p className='text-[19px] mb-8'>One of the most significant improvements for dental practices has been implementing two-way text messaging with their patients. It's no surprise that this form of communication is still the most popular, thanks to smart devices like mobile phones and tablets. If you're a dentist who hasn't added texting to your contact options, check out these top ten ways that text messaging can benefit your practice</p>

                  <div>

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
    );
};

export default Services;