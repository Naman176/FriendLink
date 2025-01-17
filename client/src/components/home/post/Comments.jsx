import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Comments = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"} px={2} pb={1} borderBottom={"1px solid gray"} mx={"auto"} width={"70%"}>
        <Stack flexDirection={"row"} gap={2}>
            <Avatar src='' alt='' />
            <Stack flexDirection={"column"}>
                <Typography variant='h6' fontWeight={"bold"} fontSize={"0.9rem"}>namansuhane174</Typography>
                <Typography variant='subtitle2' fontSize={"0.9rem"}>This is a comment</Typography>
            </Stack>
        </Stack>
        <Stack flexDirection={"row"} gap={1} alignItems={"center"} color={"gray"} fontSize={"0.9rem"}>
            <Typography variant='caption' fontSize={"0.9rem"}>24 mins</Typography>
            <IoIosMore size={20}/>
        </Stack>
    </Stack>
  )
}

export default Comments