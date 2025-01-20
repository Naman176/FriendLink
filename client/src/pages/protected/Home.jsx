import { Button, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Input from '../../components/home/Input'
import Post from '../../components/home/Post'

const Home = () => {

  const _850 = useMediaQuery("(min-width:850px)")

  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={_850 ? 5 : 2} mb={_850 ? 10 : 10}>
        <Stack flexDirection={"column"} gap={_850 ? 5 : 2}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
        <Stack mx={"auto"}>
          <Button size='small' variant='outlined' color='gray' sx={{
            ":hover" : {
              backgroundColor: "black",
              color: "white"
            }
          }}>Load More...</Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Home