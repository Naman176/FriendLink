import { Stack, Typography } from '@mui/material'
import React from 'react'
import Comments from '../../../components/home/post/Comments'
import { useSelector } from 'react-redux'

const Replies = () => {

  const { darkMode, user } = useSelector((state) => state.service)
  
  return (
    <Stack flexDirection={"column"} width={"65%"} mx={"auto"} gap={3} mb={5} color={darkMode ? "white" : "black"}>
      {
        user ? user.data ? user.data.replies.length > 0 ?
          user.data.replies.map((e) => { return <Comments key={e._id} e={e} /> })
          : <Typography textAlign={"center"} variant='h6'>No Comments Yet!!!</Typography>
          : null : null
      }
    </Stack>
  )
}

export default Replies