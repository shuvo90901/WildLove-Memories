import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../contexts/hooks/useTitle';
import Loader from '../Shared/Loader/Loader';
import Service from '../Shared/Service/Service';

const Services = () => {
    // add title hook
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div>
            {
                services.length !== 0 ?
                    <div className=''>
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                    :
                    <Loader></Loader>
            }
        </div>
    );
};

export default Services;