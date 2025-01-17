import { Stack, TextField } from '@mui/material'
import React from 'react'
import Post from '../../components/home/Post'
import Comments from '../../components/home/post/Comments'

const SinglePost = () => {
    return (
        <>
            <Stack flexDirection={"column"} gap={2} my={5}>
                <Post />
                <Stack flexDirection={"column"} gap={2} width={"80%"} mx={"auto"}>
                    <Comments />
                </Stack>
                <TextField variant='outlined' placeholder='Comment Here...' id='comment' sx={{
                    width: "50%",
                    mx: "auto",
                    my: 5,
                    p: 1,
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "black",
                            },
                        },
                    }
                }} />
            </Stack>
        </>
    )
}

export default SinglePost