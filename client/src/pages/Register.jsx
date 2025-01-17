import React from 'react'
import { Stack, Typography, TextField, Button } from "@mui/material";

const Register = () => {
    return (
        <>
            <Stack width={"100%"} height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <img src="/friendlink-high-resolution-logo.png" alt="Logo" height={"200px"} width={"50%"} />
                <Stack width={"40%"} mt={10} gap={2}>
                    <Typography variant='h5' alignSelf={"center"} fontWeight={"bold"}>Register with Email</Typography>
                    <TextField variant='outlined' placeholder='Enter your user name' sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black",
                                },
                            },
                        }
                    }} />
                    <TextField variant='outlined' placeholder='Enter your email' sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black",
                                },
                            },
                        }
                    }} />
                    <TextField variant='outlined' placeholder='Enter your password' sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black",
                                },
                            },
                        }
                    }} />
                    <Button variant='contained' size='large' sx={{
                        bgcolor: "gray",
                        color: "white",
                        ":hover": {
                            bgcolor: "black"
                        }
                    }}>Sign Up</Button>
                    <Typography variant='subtitle1' alignSelf={"center"} sx={{
                        fontSize: "1rem",
                        color: "gray"
                    }}>Already have an account ? <Button sx={{
                        fontSize: "1rem",
                        color: "black",
                        ":hover": {
                            bgcolor: "black",
                            color: "white",
                        }
                    }}>Login</Button></Typography>
                    {/* <Typography variant='subtitle2' alignSelf={"center"}>Already have an account ? <span className='register-login-link'>Login</span></Typography> */}
                </Stack>
            </Stack>
        </>
    )
}

export default Register