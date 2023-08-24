import React from 'react';
import ServiceTabCategory from './ServiceTabCategory';

const ServicesTab = ({service}) => {

    return (
           <div>
                {
                  service.map(itemCategory =><ServiceTabCategory
                    key={itemCategory._id}
                   itemCategory={itemCategory}
                  ></ServiceTabCategory>)
                }
           </div> 
    );
};

export default ServicesTab;