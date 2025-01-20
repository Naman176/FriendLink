import { Avatar, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Comments = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")
  const _300 = useMediaQuery("(min-width:300px)")

  const handleClose = () => { }
  const handleDeleteComment = () => { }

  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"} px={2} pb={1} borderBottom={"1px solid gray"} mx={"auto"} width={_850 ? "70%" : _450 ? "80%" : "100%"}>
        <Stack flexDirection={"row"} gap={_850 ? 2 : 1}>
          <Avatar src='' alt='' sx={{
            width: _450 ? 40 : 36,
            height: _450 ? 40 : 36
          }} />
          <Stack flexDirection={"column"}>
            <Typography variant='h6' fontWeight={"bold"} fontSize={"0.9rem"}>namansuhane174</Typography>
            <Typography variant='subtitle2' fontSize={"0.9rem"}>This is a comment</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection={_300 ? "row" : "column"} gap={_300 ? 1 : 0} color={"gray"} fontSize={"0.9rem"}>
          <Typography variant='caption' fontSize={_300 ? "0.9rem" : "0.8rem"}>24 mins</Typography>
          <IoIosMore size={20} />
        </Stack>
      </Stack>
      <Menu anchorEl={""} open={false} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}>
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export default Comments