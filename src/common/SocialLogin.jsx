import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const SocialLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const handleGoogle=()=>{
        loginWithGoogle()
        .then((result)=>{
            result.user
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleGoogle} className='btn w-full'>log In With Google</button>
        </div>
    );
};

export default SocialLogin;