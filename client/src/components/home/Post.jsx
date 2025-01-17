import { Stack, Typography } from '@mui/material'
import { SlOptions } from "react-icons/sl"
import React from 'react'
import PostOne from './post/PostOne'
import PostTwo from './post/PostTwo'

const Post = () => {
  return (
    <>
        <Stack flexDirection={'row'} justifyContent={"space-between"} width={"70%"} borderBottom={"2px solid gray"} p={2} mx={'auto'} sx={{
            ":hover": {
                cursor: 'pointer',
                boxShadow: "10px 10px 10px gray"
            },
            transition: "all ease-in-out 0.3s"
        }} >

            <Stack flexDirection={'row'} gap={2}>
                <PostOne />
                <PostTwo />
            </Stack>

            <Stack flexDirection={'row'} justifyContent={'center'} gap={2} fontSize={"1rem"} position={"relative"} top={2}>
                <Typography variant='caption' color='gray' fontSize={"1rem"}>24h</Typography>
                <SlOptions size={20}/>
            </Stack>
        </Stack>
    </>
  )
}

export default Post