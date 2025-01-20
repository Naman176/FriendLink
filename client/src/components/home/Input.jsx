import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Input = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")

  return (
    <>
      {_450 ? <Stack flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"} width={_850 ? "70%" : "90%"} 
        height={28} mx={"auto"} my={_850 ? 4 : 1} px={1.8} py={3.5} borderBottom={"2px solid gray"}>

        <Stack flexDirection={"row"} alignItems={'center'} gap={_850 ? 2 : 1} >
          <Avatar src='' alt='Avatar' />
          <Typography color='gray'fontSize={_850 ? "1.2rem" : "1.1rem"}>Start a thread...</Typography>
        </Stack>
        <Button variant='contained' sx={{
           bgcolor: "gray",
           color: "white",
           ":hover": {
             bgcolor: "black"
           }
          }}> 
          POST
        </Button>
      </Stack> : null}
    </>
  )
}

export default Input