import { Stack, Typography } from '@mui/material'
import React from 'react'
import Post from '../../../components/home/Post'
import { useSelector } from 'react-redux'


const Threads = () => {

  const { darkMode, user } = useSelector((state) => state.service)

  return (
    <>
        <Stack flexDirection={"column"} width={"65%"} mx={"auto"} gap={2} mb={5} color={darkMode ? "white" : "black"}>
        {
          user ? user.data ? user.data.threads.length > 0 ?
            user.data.threads.map((e) => { return <Post key={e._id} e={e} /> })
            : <Typography textAlign={"center"} variant='h6'>No Threads Yet!!!</Typography>
            : null : null
        }
        </Stack>
    </>
  )
}

export default Threads