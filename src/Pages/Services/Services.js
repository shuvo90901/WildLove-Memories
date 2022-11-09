import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Shared/Service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className=''>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;