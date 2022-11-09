import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Pages/Home/Headers/Headers';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;