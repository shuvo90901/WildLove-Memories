import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name } = service;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default ServiceDetails;