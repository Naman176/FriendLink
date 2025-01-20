import React, { useState } from 'react'
import { Stack, Typography, TextField, Button, useMediaQuery } from "@mui/material";

const Register = () => {

    const _700 = useMediaQuery("(min-width:700px)")
    const _300 = useMediaQuery("(min-width:300px)")

    const [login, setLogin] = useState(false);
    const [userName, setUsername] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const toggleLogin = () => {
        setLogin((pre) => !pre);
    }

    const handleLogin = () => {
        console.log("logged in");
        const data = {email, password};
        console.log(data);
    }

    const handleRegister = () => {
        console.log("resgistered in");
        const data = {userName, email, password};
        console.log(data);
    }

    return (
        <>
            <Stack width={"100%"} height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                {_300 ? <img src="/friendlink-high-resolution-logo.png" alt="Logo" height={_700 ? "200px" : "100px"} width={_700 ? "500px" : "300"} /> : null}
                {/* <img src="/friendlink-high-resolution-logo.png" alt="Logo" height={_700 ? "200px" : "100px"} width={_700 ? "500px" : "300"} /> */}
                <Stack width={_700 ? "40%" : "90%"} mt={_700 ? 10 : 0} gap={2}>
                    <Typography variant='h5' alignSelf={"center"} fontWeight={"bold"} fontSize={_700 ? "1.5rem" : "1.2rem"}>
                        {login ? "Login to your account" : "Register new account"}
                    </Typography>
                    {login ? "" : <TextField variant='outlined' placeholder='Enter your user name' onChange={(e) => setUsername(e.target.value)}
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