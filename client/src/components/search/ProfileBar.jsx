import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileBar = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

    return (
        <>
            <Stack flexDirection={"row"} justifyContent={"space-between"} px={1} mx={"auto"} width={"100%"}
                borderBottom={`2px solid ${darkMode ? "white" : "gray"}`} sx={{
                    ":hover": {
                        cursor: "pointer",
                        boxShadow: `10px 10px 10px ${darkMode ? "white" : "gray"}`
                    },
                    transition: "all ease-in-out 0.3s"
                }}>
                <Stack flexDirection={"row"} gap={_850 ? 2 : 1}>
                    <Avatar src='' alt='' sx={{
                        width: _850 ? 40 : _450 ? 38 : 34,
                        height: _850 ? 40 : _450 ? 38 : 34
                    }} />
                    <Stack flexDirection={"column"}>
                        <Typography variant='h6' fontWeight={"bold"} fontSize={_450 ? "1rem" : "0.9rem"} color={darkMode ? "white" : "black"}>namansuhane174</Typography>
                        <Typography variant='caption' fontSize={_450 ? "1.1rem" : "1rem"} color={darkMode ? "white" : "gray"}>This is bio....</Typography>
                        <Typography variant='caption' fontSize={_450 ? "1rem" : "0.9rem"} color={darkMode ? "white" : "black"} marginBottom={1}>3 followers</Typography>
                    </Stack>
                </Stack>
                <Button variant='outlined' size={_450 ? 'medium' : 'small'} sx={{
                    color: darkMode ? "white" : "black",
                    borderColor: darkMode ? "white" : "black",
                    height: _450 ? 40 : 32,
                    ":hover": {
                        bgcolor: darkMode ? "white" : "black",
                        color: darkMode ? "black" : "white"
                    }
                }}>Follow</Button>
            </Stack>
        </>
    )
}

export default ProfileBar