import { Stack } from '@mui/material'
import React from 'react'
import Post from '../../../components/home/Post'

const Threads = () => {
  return (
    <>
        <Stack flexDirection={"column"} width={"65%"} mx={"auto"} gap={2} mb={5}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Stack>
    </>
  )
}

export default Threads