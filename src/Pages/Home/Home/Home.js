import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className=''>
            <h2>{user?.displayName}</h2>
        </div>
    );
};

export default Home;