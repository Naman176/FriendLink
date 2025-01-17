import React from 'react'
import { Stack, Button, Typography } from "@mui/material";

const Error = () => {
  return (
    <>
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100vh"} gap={1} margin={"0 10px"} className='error-container'>
            <Stack width={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1} margin={"2%"} className='error_code'>

                <Typography variant='h3' sx={{
                    animation: "fall 1s linear",
                    transform: "rotateZ(-20deg)"
                }}>4</Typography>

                <Typography variant='h3' sx={{
                    color: "blue",
                    animation: "bounce 1.2s 1.8s linear forwards",
                    // opacity: "0",
                }}>0</Typography>

                <Typography variant='h3' sx={{
                    animation: "fall 1.8s linear",
                    transform: "rotateZ(8deg)"
                }}>4</Typography>

            </Stack>

            <Typography variant='h5' className='error_titlle'>
                Page Not Found
            </Typography>

            <Typography variant='subtitle2' className='error_desc'>
                We can't seem to find the page your are looking for. It might have been removed or doesn't exist aymore.
            </Typography>

            <Button variant="contained" sx={{
                borderRadius: "10px",
                p: 2,
                marginTop: "1%",
                color: 'white'
            }} className='action'>Go Home</Button>
        </Stack>
    </>
  )
}

export default Error