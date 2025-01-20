import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const ProfileBar = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    return (
        <>
            <Stack flexDirection={"row"} justifyContent={"space-between"} px={1} mx={"auto"} width={"100%"}
                borderBottom={"1px solid gray"} sx={{
                    ":hover": {
                        cursor: "pointer",
                        boxShadow: "10px 10px 10px gray"
                    },
                    transition: "all ease-in-out 0.3s"
                }}>
                <Stack flexDirection={"row"} gap={_850 ? 2 : 1}>
                    <Avatar src='' alt='' sx={{
                        width: _850 ? 40 : _450 ? 38 : 34,
                        height: _850 ? 40 : _450 ? 38 : 34
                    }} />
                    <Stack flexDirection={"column"}>
                        <Typography variant='h6' fontWeight={"bold"} fontSize={_450 ? "1rem" : "0.9rem"}>namansuhane174</Typography>
                        <Typography variant='caption' fontSize={_450 ? "1.1rem" : "1rem"} color='gray'>This is bio....</Typography>
                        <Typography variant='caption' fontSize={_450 ? "1rem" : "0.9rem"}>3 followers</Typography>
                    </Stack>
                </Stack>
                <Button variant='outlined' size={_450 ? 'medium' : 'small'} sx={{
                    color: "black",
                    borderColor: "black",
                    height: _450 ? 40 : 32,
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