import React, { useEffect, useState } from 'react'
import { Stack, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { useLoginMutation, useRegisterMutation } from '../redux/service';
import { Bounce, toast } from 'react-toastify'
import Loading from '../components/common/Loading';

const Register = () => {

    const _700 = useMediaQuery("(min-width:700px)")
    const _300 = useMediaQuery("(min-width:300px)")

    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const [registerUser, registerUserData] = useRegisterMutation()
    const [loginUser, loginUserData] = useLoginMutation()

    const toggleLogin = () => {
        setLogin((pre) => !pre);
    }

    const handleLogin = async () => {
        const data = { email, password };
        await loginUser(data)
    }

    const handleRegister = async () => {
        const data = { userName, email, password };
        await registerUser(data)
    }

    useEffect(() => {
        if (registerUserData.isSuccess) {
            toast.success(registerUserData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(registerUserData.data);
        }
        if (registerUserData.isError) {
            toast.error(registerUserData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(registerUserData.error.data);
        }
    }, [registerUserData.isSuccess, registerUserData.isError])

    useEffect(() => {
        if (loginUserData.isSuccess) {
            toast.success(loginUserData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(loginUserData.data);
        }
        if (loginUserData.isError) {
            toast.error(loginUserData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(loginUserData.error.data);
        }
    }, [loginUserData.isSuccess, loginUserData.isError])

    if (registerUserData.isLoading || loginUserData.isLoading) {
        return (
            <Stack height={"90vh"} alignItems={"center"} justifyContent={"center"}>
                <Loading />
            </Stack>
        )
    }

    useEffect(() => {
        if (registerUserData.isSuccess) {
            console.log(registerUserData.data);
        }
        if (loginUserData.isSuccess) {
            console.log(loginUserData.data);
        }
    }, [registerUserData.isSuccess, loginUserData.isSuccess])

    return (
        <>
            <Stack width={"100%"} height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                {_300 ? <img src="/friendlink-high-resolution-logo.png" alt="Logo" height={_700 ? "200px" : "100px"} width={_700 ? "500px" : "300"} /> : null}
                {/* <img src="/friendlink-high-resolution-logo.png" alt="Logo" height={_700 ? "200px" : "100px"} width={_700 ? "500px" : "300"} /> */}
                <Stack width={_700 ? "40%" : "90%"} mt={_700 ? 10 : 0} gap={2}>
                    <Typography variant='h5' alignSelf={"center"} fontWeight={"bold"} fontSize={_700 ? "1.5rem" : "1.2rem"}>
                        {login ? "Login to your account" : "Register new account"}
                    </Typography>
                    {login ? "" : <TextField variant='outlined' placeholder='Enter your user name' onChange={(e) => setUserName(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "black",
                                    },
                                },
                            }
                        }} />}
                    <TextField variant='outlined' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "black",
                                    },
                                },
                            }
                        }} />
                    <TextField variant='outlined' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "black",
                                    },
                                },
                            }
                        }} />
                    <Button variant='contained' size='large' onClick={login ? handleLogin : handleRegister} sx={{
                        bgcolor: "gray",
                        color: "white",
                        ":hover": {
                            bgcolor: "black"
                        }
                    }}>
                        {login ? "LOGIN" : "SIGN UP"}
                    </Button>
                    <Typography variant='subtitle1' alignSelf={"center"} sx={{
                        fontSize: "1rem",
                        color: "gray"
                    }}>
                        {login ? "Don't have an account? " : "Already have an account? "}
                        <Button sx={{
                            fontSize: "1rem",
                            color: "black",
                            ":hover": {
                                bgcolor: "white",
                                // color: "white",
                                // border: "1px solid black"
                            }
                        }} onClick={toggleLogin}>
                            {login ? "Sign Up" : "Login"}
                        </Button>
                    </Typography>
                    {/* <Typography variant='subtitle2' alignSelf={"center"}>Already have an account ? <span className='register-login-link'>Login</span></Typography> */}
                </Stack>
            </Stack>
        </>
    )
}

export default Register