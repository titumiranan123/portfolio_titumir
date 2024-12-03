import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main: React.FC = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;