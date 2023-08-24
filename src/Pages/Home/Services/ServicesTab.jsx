import React from 'react';
import ServiceTabCategory from './ServiceTabCategory';

const ServicesTab = ({service}) => {

    return (
    <div>
            <div>
                {
                  service.map(itemCategory =><ServiceTabCategory
                    key={itemCategory._id}
                   itemCategory={itemCategory}
                  ></ServiceTabCategory>)
                }
             </div> 

     </div>
          
    );
};

export default ServicesTab;