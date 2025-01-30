import { Avatar, Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPostModal } from '../../redux/slice'

const Input = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")

  const { darkMode, myInfo } = useSelector((state) => state.service)

  const dispatch = useDispatch()

  const handleAddPostModal = () => {
    dispatch(addPostModal(true))
  }

  return (
    <>
      {_450 ?
        <Stack flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"} width={_850 ? "70%" : "90%"}
          height={28} mx={"auto"} my={_850 ? 4 : 1} px={1.8} py={3.5} borderBottom={`2px solid ${darkMode ? "white" : "gray"}`}
          onClick={handleAddPostModal}>

          <Stack flexDirection={"row"} alignItems={'center'} marginRight={"20px"} width={"100%"} gap={_850 ? 2 : 1} >
            <Avatar
              src={myInfo ? myInfo.profilePicture : "https://res.cloudinary.com/dm6dtkgtu/image/upload/b_rgb:FFFFFF/c_crop,w_600,h_600/v1738147510/blank_profile_pic_lttwrz.avif"}
              alt={myInfo ? myInfo.profilePicture : "https://res.cloudinary.com/dm6dtkgtu/image/upload/b_rgb:FFFFFF/c_crop,w_600,h_600/v1738147510/blank_profile_pic_lttwrz.avif"} />
            <Typography color={darkMode ? "white" : "gray"}>Post Something...</Typography>
          </Stack>
          <Button variant='contained' sx={{
            bgcolor: darkMode ? "white" : "gray",
            color: darkMode ? "black" : "white",
            ":hover": {
              bgcolor: darkMode ? "lightgray" : "black",
            }
          }}>
            POST
          </Button>
        </Stack> : null}
    </>
  )
}

export default Input