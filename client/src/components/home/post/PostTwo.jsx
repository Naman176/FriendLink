import { Stack, Typography } from '@mui/material'
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import React from 'react'

const PostTwo = () => {
  return (
    <>
        <Stack flexDirection={"column"} justifyContent={"space-between"}>

            <Stack flexDirection={"column"} gap={2}>
                <Stack flexDirection={"column"}>
                    <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}> 
                        Naman Suhane
                    </Typography>

                    <Typography variant='h5' fontSize={"1.2rem"}>
                        This is the caption for welcome post
                    </Typography>
                </Stack>
                <img src="/friendlink-high-resolution-logo.png" alt="post-img" loading='lazy' width={"400px"} height={"auto"}/>
            </Stack>

            <Stack flexDirection={"column"} gap={1}>
                <Stack flexDirection={"row"} gap={2} m={1}>
                    <FaRegHeart size={25}/>
                    <FaRegComment size={25}/>
                    <FaRetweet size={25}/>
                    <IoMdSend size={25}/>
                </Stack>
                
                <Stack flexDirection={"row"} gap={1} position={"relative"} top={-3} left={4}>
                    <Typography variant='caption' color='gray' fontSize={"1.1rem"}>2 Likes .</Typography>
                    <Typography variant='caption' color='gray' fontSize={"1.1rem"}>1 Comment</Typography>
                </Stack>
            </Stack>

        </Stack>
    </>
  )
}

export default PostTwo