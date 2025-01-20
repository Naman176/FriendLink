import { Button, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Input from '../../components/home/Input'
import Post from '../../components/home/Post'

const Home = () => {

  const _850 = useMediaQuery("(min-width:850px)")

  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={_850 ? 10 : 10}>
        <Stack>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
        <Button size='large'>Load More...</Button>
      </Stack>
    </>
  )
}

export default Home