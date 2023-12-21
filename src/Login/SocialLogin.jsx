import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <button
                    onClick={() => handleSocialLogin(googleSignIn)}
                    className='btn mb-2 ml-16 btn-outline w-56'>
                    <FcGoogle></FcGoogle>
                    signIn with Goole
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;