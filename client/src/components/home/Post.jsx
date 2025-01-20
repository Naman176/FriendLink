import { Stack, Typography, useMediaQuery } from '@mui/material'
import { SlOptions } from "react-icons/sl"
import React from 'react'
import PostOne from './post/PostOne'
import PostTwo from './post/PostTwo'

const Post = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

  return (
    <>
        <Stack flexDirection={'row'} justifyContent={"space-between"} width={_850 ? "70%" : _450 ? "90%" : "100%"} 
        borderBottom={"2px solid gray"} p={_450 ? 2 : 1} mx={'auto'} sx={{
            ":hover": {
                cursor: 'pointer',
                boxShadow: "10px 10px 10px gray"
            },
            transition: "all ease-in-out 0.3s"
        }} >

            <Stack flexDirection={'row'} gap={_850 ? 2 : 1}>
                <PostOne />
                <PostTwo />
            </Stack>

            <Stack flexDirection={'row'} justifyContent={'center'} gap={_850 ? 2 : 1} fontSize={"1rem"} position={"relative"} top={2}>
                <Typography variant='caption' color='gray' fontSize={_850 ? "1rem" : _450 ? "0.9rem" : "0.8rem"}>24h</Typography>
                <SlOptions size={_850 ? 20 : _450 ? 17 : 15}/>
            </Stack>
        </Stack>
    </>
  )
}

export default Post