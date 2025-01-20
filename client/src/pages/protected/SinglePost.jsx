import { Stack, TextField, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Post from '../../components/home/Post'
import Comments from '../../components/home/post/Comments'

const SinglePost = () => {

    const [comment, setComment] = useState("")
    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    return (
        <>
            <Stack flexDirection={"column"} gap={2} my={5}>
                <Post />
                <Stack flexDirection={"column"} gap={2} width={_850 ? "80%" : _450 ? "90%" : "100%"} mx={"auto"}>
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
                }} onChange={(e) => setComment(e.target.value)} />
            </Stack>
        </>
    )
}

export default SinglePost