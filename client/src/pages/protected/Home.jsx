import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Input from '../../components/home/Input'
import Post from '../../components/home/Post'
import Loading from '../../components/common/Loading'
import { useSelector } from 'react-redux'
import { useAllPostQuery } from '../../redux/service'

const Home = () => {

  const _850 = useMediaQuery("(min-width:850px)")

  const [page, setPage] = useState(1)
  const [showLoadMore, setShowLoadMore] = useState(true)

  const { darkMode, allPosts } = useSelector((state) => state.service)
  const { data, isLoading } = useAllPostQuery(page)

  const handleLoadMoreClick = () => {
    setPage((pre) => pre + 1)
  }

  useEffect(() => {
    if(data && data.data.length<3){
      setShowLoadMore(false)
    } 
  }, [data])

  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={_850 ? 5 : 2} mb={_850 ? 10 : 10}>
        <Stack flexDirection={"column"} gap={_850 ? 5 : 2}>
          {
            allPosts ?
              (allPosts.length > 0 ?
                (allPosts.map((e) => {
                  return <Post key={e._id} e={e} />
                })) :
                <Typography variant='h6' textAlign={"center"}> No Post Yet!!!</Typography>
              ) :
              (isLoading ? (<Loading />) : null)
          }
        </Stack>
        <Stack mx={"auto"}>
          {
            showLoadMore ?
              <Button size='small' variant='outlined' sx={{
                color: darkMode ? "white" : "black",
                borderColor: darkMode ? "white" : "black",
                ":hover": {
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white"
                }
              }} onClick={handleLoadMoreClick}>
                Load More...
              </Button>
              :
              allPosts?.length > 0 && (
                <Typography variant='h6' textAlign={"center"}> You Have Reached End!!!</Typography>
              )
          }

        </Stack>
      </Stack>
    </>
  )
}

export default Home