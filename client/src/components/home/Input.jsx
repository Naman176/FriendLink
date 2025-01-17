import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Input = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"} width={"70%"} height={28} mx={"auto"} my={8} px={1.8} py={3.5} borderBottom={"2px solid gray"}>
      <Stack flexDirection={"row"} alignItems={'center'} gap={2} >
        <Avatar src='' alt='Avatar' />
        <Typography color='gray'>Start a thread...</Typography>
      </Stack>
      <Button variant='contained' sx={{
        bgcolor: "gray",
        color: "white",
        ":hover": {
          bgcolor: "black"
        }
      }}>POST</Button>
    </Stack>
  )
}

export default Input