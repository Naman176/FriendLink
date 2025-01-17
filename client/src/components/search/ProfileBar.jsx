import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileBar = () => {
    return (
        <>
            <Stack flexDirection={"row"} justifyContent={"space-between"} px={1} mx={"auto"} width={"100%"}
                borderBottom={"1px solid black"} sx={{
                    ":hover": {
                        cursor: "pointer",
                        boxShadow: "10px 10px 10px gray"
                    },
                    transition: "all ease-in-out 0.3s"
                }}>
                <Stack flexDirection={"row"} gap={2}>
                    <Avatar src='' alt=''/>
                    <Stack flexDirection={"column"}>
                        <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}>namansuhane174</Typography>
                        <Typography variant='caption' fontSize={"1.1rem"} color='gray'>This is bio....</Typography>
                        <Typography variant='caption' fontSize={"1rem"}>3 followers</Typography>
                    </Stack>
                </Stack>
                <Button variant='outlined' size='medium' sx={{
                    color: "black",
                    borderColor: "black",
                    height: 40,
                    ":hover": {
                        bgcolor: "black",
                        color: "white"
                    }
                }}>Follow</Button>
            </Stack>
        </>
    )
}

export default ProfileBar