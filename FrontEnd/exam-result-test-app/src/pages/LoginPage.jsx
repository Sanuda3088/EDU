import React, { useRef, useState } from 'react'
import loginBg from '../assets/login/loginBg.png'
import loginUniLogo from '../assets/login/loginUniLogo.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const user = {
        username: 'admin',
        password: 'admin'
    }

    const username = useRef();
    const password = useRef();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = () => {
         authenticateUser();
    }

    const authenticateUser = async () => {
        try {
            // const response = await fetch('http://localhost:5000/authenticate', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         username: username.current.value,
            //         password: password.current.value
            //     })
            // })

            // const data = await response.json();

            // if (data.role === 'lecture') {
            //     navigate('/lecture')
            // } else if (data.role === 'dptSecretary') {
            //     navigate('/dptSecretary')
            // } else if (data.role === 'hod') {
            //     navigate('/hod')
            // } else if (data.role === 'dean') {
            //     navigate('/dean')
            // }
             console.log(username.current.value)
            if (username.current.value === 'lecture') {
                navigate('/lecture')
            } else if (username.current.value === 'dptSecretary') {
                navigate('/dptSecretary')
            } else if (username.current.value === 'hod') {
                navigate('/hod')
            } else if (username.current.value === 'dean') {
                navigate('/dean')
            }


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='w-screen flex items-center justify-center h-screen bg-login-bg bg-cover bg-center'>
                <div className='py-4 basis-4/12 flex flex-col items-center bg-white bg-opacity-70'>
                    <div>
                        <img src={loginUniLogo} alt='uniLogo' className='w-20 h-20 mt-5' />
                    </div>
                    <h1 className='mb-7 text-3xl text-primary-txt font-semibold'>Welcome Again</h1>
                    <div className='w-3/4 flex flex-col'>
                        <label className='text-primary-txt text-[16px]'>Username</label>
                        <input
                            ref={username}
                            type='text'
                            placeholder='Username'
                            className='mt-2  px-3 w-full h-12 bg-transparent border-[2px] border-black rounded-lg focus:outline-none placeholder:text-[16px] placeholder:text-lg-placeholder-txt'
                        />
                    </div>
                    <div className='mt-3 w-3/4 flex flex-col'>
                        <label className='text-primary-txt text-[16px]'>Password</label>
                        <div className='flex items-center'>
                            <input
                                ref={password}
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                className='mt-2 px-3 w-5/6 h-12 bg-transparent border-[2px] border-r-0 border-black rounded-lg rounded-tr-none rounded-br-none focus:outline-none placeholder:text-[16px] placeholder:text-lg-placeholder-txt '
                            />
                            <div
                                className='mt-2 w-1/6 h-12 flex justify-center items-center text-primary-txt bg-transparent border-[2px] border-l-0 border-black rounded-tr-lg rounded-br-lg cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogin}
                        className='mt-7 mb-32 w-3/4 h-12 bg-primary text-white rounded-3xl'
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
