import { Stack, Typography } from '@mui/material'
import React from 'react'
import Post from '../../../components/home/Post'
import { useSelector } from 'react-redux'


const Repost = () => {

  const { user } = useSelector((state) => state.service)

  return (
    <>
      <Stack flexDirection={"column"} width={"65%"} mx={"auto"} gap={2} mb={5}>
        {
          user ? user.data ? user.data.reposts.length > 0 ?
            user.data.reposts.map((e) => { return <Post key={e._id} e={e} /> })
            : <Typography textAlign={"center"} variant='h6'>No Reposts Yet!!!</Typography>
            : null : null
        }
      </Stack>
    </>
  )
}

export default Repost