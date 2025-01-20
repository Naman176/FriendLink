import React from 'react'
import { Outlet } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import Header from '../../components/common/Header';

const ProtectedLayout = () => {

  const _850 = useMediaQuery("(min-width:700px)")

  return (
    <Stack flexDirection={"column"} maxWidth={_850 ? "800px" : "90%"} minWidth={"100%"} mx={"auto"} overflow={"hidden"}>
        <Header />
        <Outlet />
    </Stack>
  )
}

export default ProtectedLayout