import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user)
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;