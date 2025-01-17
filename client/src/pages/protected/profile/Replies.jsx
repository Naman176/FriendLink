import { Stack } from '@mui/material'
import React from 'react'
import Comments from '../../../components/home/post/Comments'

const Replies = () => {
  return (
    <Stack flexDirection={"column"} width={"65%"} mx={"auto"} gap={3} mb={5}>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
    </Stack>
  )
}

export default Replies