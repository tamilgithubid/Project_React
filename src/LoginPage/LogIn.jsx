import { Button } from '@/components/ui/button';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '@/FireBase/firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';



const LogIn = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !password || !name) {
            toast.error("Please Enter your valid Credentials");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            window.location.href = "/main";
            console.log('user registered successfully');
            toast.success('User Registered Successfully!!');
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name,
                    password: password
                });
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Email Already Used");
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter your email and password");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "/main";
            toast.success("User logged in successfully!");
        } catch (error) {
            console.log(error.message);
            toast.error("Invalid email or password");
        }
    };


    const facebookLogin = async (e) => {
        e.preventDefault();
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                window.location.href = "/main";
                toast.success("User Logged in Successfully!!");
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to log in with Facebook");
        }
    };

    const googleLogin = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                window.location.href = "/main";
                toast.success("User Logged in Successfully!!");
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to log in with Google");
        }
    };


    const handleSignUp = () => {
        setIsSignUpActive(!isSignUpActive);
        // Clear input fields
        setEmail('');
        setPassword('');
        setName('');
    };

    // const handleSignIn = () => {
    //     setIsSignUpActive(!isSignUpActive);
    //     setEmail('');
    //     setPassword('');
    // };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ height: '50rem' }} className="flex justify-center items-center mb-5  bg-gray-100 font-['Montserrat']">
            <div className="container bg-white rounded-2xl shadow-2xl w-[768px] h-[480px] overflow-hidden relative">
                <div className={`form-container absolute top-0 left-0 w-full h-full transition-transform duration-600 ease-in-out ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className={`sign-up-container absolute top-0 left-0 w-1/2 h-full transition-opacity duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[100%] opacity-100 z-1' : 'opacity-0 z-0'}`}>
                        <form onSubmit={handleRegister} className="flex flex-col items-center justify-center h-full bg-white px-12 text-center">
                            <h1 className="font-bold m-0  font-sans justify-center  text-black  text-2xl mt-4">Create Account</h1>
                            <div className="social-container  my-5">
                                <a onClick={googleLogin} href="#" className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-google  text-black"></i>
                                </a>
                                <a onClick={facebookLogin} href="#" className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-facebook-f  text-black"></i>
                                </a>

                                <a href="#" className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-linkedin-in  text-black"></i>
                                </a>
                            </div>
                            <span className="my-4  text-black">or use your email for registration</span>
                            <input className="bg-gray-200 border-none py-3 px-4 mb-4  text-black w-full" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" />
                            <input className="bg-gray-200 border-none py-3 px-4 mb-4  text-black w-full" onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                            <div className="relative">
                                <input style={{ width: "18rem" }} className="bg-gray-200 border-none py-3 px-4  text-black mb-4 w-full pr-10" onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} placeholder="Password" />
                                <button type="button" className="absolute inset-y-0 mb-3 right-0 flex items-center px-3" onClick={togglePasswordVisibility}>
                                    {showPassword ? <i className="fas fa-eye-slash text-gray-500"></i> : <i className="fas fa-eye text-gray-500"></i>}
                                </button>
                            </div>
                            <button className="bg-[#FF4B2B] text-white font-bold py-3 px-12 mt-4 rounded-full">Sign Up</button>
                        </form>
                    </div>

                    <div className={`sign-in-container absolute top-0 left-0 w-1/2 h-full transition-opacity duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[100%] opacity-0 z-0' : 'opacity-100 z-1'}`}>
                        <form onSubmit={handleSignIn} className="flex flex-col items-center justify-center h-full bg-white px-12 text-center">
                            <h1 className="font-bold font-sans m-0 mb-2 text-black text-3xl">Sign in</h1>
                            <div className="social-container my-5">
                                <a href="#" onClick={googleLogin} className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-google  text-black"></i>
                                </a>
                                <a onClick={facebookLogin} href="#" className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-facebook-f  text-black"></i>
                                </a>

                                <a href="#" className="social mx-1.5 border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                                    <i className="fab fa-linkedin-in  text-black"></i>
                                </a>
                            </div>
                            <span className="my-4  text-black">or use your account</span>
                            <input className="bg-gray-200 border-none py-3 px-4 mb-4  text-black w-full" onChange={(e) => setEmail(e.target.value)} value={email || ''} type="email" placeholder="Email" />
                            <div className="relative">
                                <input style={{ width: "18rem" }} className="bg-gray-200 border-none py-3  text-black  px-4 mb-4 w-full pr-10" onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} placeholder="Password" />
                                <button type="button" className="absolute inset-y-0 mb-3 right-0 flex items-center px-3" onClick={togglePasswordVisibility}>
                                    {showPassword ? <i className="fas fa-eye-slash text-gray-500"></i> : <i className="fas fa-eye text-gray-500"></i>}
                                </button>
                            </div>
                            <a href="#" className="mb-4 text-[#333] text-sm">Forgot your password?</a>
                            <button onClick={handleSignIn} className="bg-[#FF4B2B] text-white font-bold py-3 px-12 mt-4 rounded-full">Sign In</button>
                        </form>
                    </div>
                </div>

                <div className={` overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-100 transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[-100%]' : ''}`}>
                    <div className="overlay bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] bg-no-repeat bg-cover bg-center h-full w-[200%] transition-transform duration-600 ease-in-out translate-x-0">

                        <div className={`overlay-panel overlay-right absolute top-0 right-0 flex flex-col items-center justify-center h-full w-1/2 text-white text-center transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
                            <h1 className="font-bold m-0  font-sans   text-4xl">{isSignUpActive ? <>Welcome Back !</> : <><p className='mb-2' >Hello, Friend !</p></>} </h1>

                            {isSignUpActive ? <> <div><p className="font-normal p-3  mb-4">To keep connected with us please login with your personal info</p></div></> : <><div><p className="font-normal mb-8">Enter your personal details and start journey with us</p></div></>}
                            <Button
                                variant="outline"
                                className="bg-transparent border-white text-white font-bold py-3 px-12 rounded-full"
                                onClick={handleSignUp}
                            >
                                {isSignUpActive ? <>Sign In</> : <>Sign Up</>}

                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LogIn;


{/**<div className={`overlay-panel overlay-left absolute top-0 left-0 flex flex-col items-center justify-center h-full w-1/2 text-white text-center transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-0' : '-translate-x-[20%]'}`}>
    <h1 className={`font-bold mb-4  `}>Welcome Back!</h1>
    <p className="mb-8">To keep connected with us please login with your personal info</p>
    <button
        className="bg-transparent border-white text-white font-bold py-3 px-12 rounded-full"
        onClick={handleSignIn}
    >
        Sign In
    </button>
</div> */}