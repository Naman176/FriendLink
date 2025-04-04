import React from 'react'
import { Outlet } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import Header from '../../components/common/Header';
import AddPost from '../../components/modals/AddPost';
import EditProfile from '../../components/modals/EditProfile';
import MainMenu from '../../components/menu/MainMenu';
import PostMenu from '../../components/menu/PostMenu'

const ProtectedLayout = () => {

  const _850 = useMediaQuery("(min-width:700px)")

  return (
    <Stack flexDirection={"column"} maxWidth={_850 ? "800px" : "90%"} minWidth={"100%"} mx={"auto"} overflow={"hidden"}>
        <Header />
        <AddPost />
        <EditProfile />
        <MainMenu />
        <PostMenu />
        <Outlet />
    </Stack>
  )
}

export default ProtectedLayout