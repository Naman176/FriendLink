import { Avatar, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteCommentMutation, useSinglePostQuery } from '../../../redux/service'
import { NavLink } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

const Comments = ({ e, postId }) => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")
  const _300 = useMediaQuery("(min-width:300px)")

  const { darkMode, myInfo } = useSelector((state) => state.service)
  const [openCommentMenu, setOpenCommentMenu] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)

  const [deleteComment, deleteCommentData] = useDeleteCommentMutation()
  const { refetch } = useSinglePostQuery(postId)

  const handleClose = () => {
    setOpenCommentMenu(null)
  }

  const handleCommentMenu = (e) => {
    setOpenCommentMenu(e.currentTarget)
  }

  const handleDeleteComment = async () => {
    const info = {
      postId,
      id: e?._id,
    }
    await deleteComment(info)
    handleClose()
    refetch()
  }

  const checkisAdmin = () => {
    if (e && myInfo) {
      if (e.admin._id === myInfo._id) {
        setIsAdmin(true)
        return
      }
    }
    setIsAdmin(false)
  }

  useEffect(() => {
    checkisAdmin()
  }, [])

  useEffect(() => {
    if (deleteCommentData.isSuccess) {
      toast.success(deleteCommentData.data.message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        transition: Bounce,
      })
      console.log(deleteCommentData.data);
    }
    if (deleteCommentData.isError) {
      toast.error(deleteCommentData.error.data.error, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        transition: Bounce,
      })
      console.log(deleteCommentData.error.data);
    }
  }, [deleteCommentData.isSuccess, deleteCommentData.isError])

  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"} px={2} pb={1} borderBottom={"1px solid gray"} mx={"auto"}
        marginTop={1} width={_850 ? "70%" : _450 ? "80%" : "100%"}>
        <Stack flexDirection={"row"} gap={_850 ? 2 : 1}>
          <NavLink to={`/profile/threads/${e?.admin._id}`}>
            <Avatar
              src={e ? e.admin.profilePicture : ""}
              alt={e ? e.admin.userName : ""}
              sx={{
                width: _450 ? 40 : 36,
                height: _450 ? 40 : 36
              }} />
          </NavLink>
          <Stack flexDirection={"column"}>
            <Typography variant='h6' fontWeight={"bold"} fontSize={"0.9rem"} color={darkMode ? "white" : "black"}>{e ? e.admin.userName : ""}</Typography>
            <Typography variant='subtitle2' fontSize={"0.9rem"} color={darkMode ? "white" : "black"}>{e ? e.text : ""}</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection={_300 ? "row" : "column"} gap={_300 ? 1 : 0} color={darkMode ? "white" : "gray"} fontSize={"0.9rem"}>
          <Typography variant='caption' fontSize={_300 ? "0.9rem" : "0.8rem"}>24 mins</Typography>
          <span>
            {
              isAdmin ?
                <IoIosMore size={20} onClick={handleCommentMenu} />
                :
                <IoIosMore size={20} />
            }
          </span>
        </Stack>
      </Stack>
      <Menu anchorEl={openCommentMenu} open={openCommentMenu !== null ? true : false} onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export default Comments