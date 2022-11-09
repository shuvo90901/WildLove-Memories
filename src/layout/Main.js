import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Headers from '../Pages/Home/Headers/Headers';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <Headers services={services}></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;