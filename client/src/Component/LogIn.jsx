
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";

import { FcGoogle } from 'react-icons/fc'
import { MdBloodtype } from "react-icons/md";
import { contextApi } from "../App";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



//import auth
import auth from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//




const LogIn = () => {
    const [userLogin, setUserLogin] = useContext(contextApi);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state;
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, provider).then((resutl) => {
            // console.log(resutl.user);
            const user = resutl.user
            setUserLogin(user)
            if (from) {
                navigate(from.pathname)
            }

        })
        // 
        // console.log('hello')
        // if (from) {
        //     navigate(from.pathname)
        // }
    }

    return (
        <div className='h-screen flex flex-col gap-5 items-center justify-center'>
            <Typography variant="h5" className="mb-6 flex">
                <MdBloodtype className="flex justify-center items-center"></MdBloodtype>Blood Drop
            </Typography>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 ">
                    <button onClick={googleLogin} className="flex items-center hover:cursor-pointer justify-center gap-2 border rounded-full p-2 ">
                        <FcGoogle className="text-2xl" /> <span className="text-1xl">Continue with Google</span>
                    </button>
                </CardBody>

            </Card>
        </div>
    );
};

export default LogIn;