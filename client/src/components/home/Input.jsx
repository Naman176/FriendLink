import { Avatar, Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Input = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")

  return (
    <>
      {_450 ?
        <Stack flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"} width={_850 ? "70%" : "90%"}
          height={28} mx={"auto"} my={_850 ? 4 : 1} px={1.8} py={3.5}>

          <Stack flexDirection={"row"} alignItems={'center'} marginRight={"20px"} width={"100%"} gap={_850 ? 2 : 1} >
            <Avatar src='' alt='Avatar' />
            <TextField variant='standard' placeholder='Start a thread' multiline fullWidth maxRows={2} sx={{
              // width: "800%",
              "& .MuiInput-root": {
                "&:before": {
                  borderWidth: "2px",
                  borderColor: "gray"
                },
                "&:after": {
                  borderWidth: "2px",
                  borderColor: "gray"
                },
                ":hover": {
                  "&:before": {
                    borderWidth: "2px",
                    borderColor: "gray"
                  },
                  "&:after": {
                    borderWidth: "2px",
                    borderColor: "gray"
                  },
                },
              },
            }}/>
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