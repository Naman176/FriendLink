import React from 'react'
import { Stack } from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Stack direction={'row'} maxWidth={'100%'} justifyContent={'space-around'} alignItems={'center'}>
        <NavLink to={'/'} className={'link'}>
          <GoHome size={32} />
        </NavLink>

        <NavLink to={'/search'} className={'link'}>
          <IoIosSearch size={32} />
        </NavLink>

        <TbEdit size={32} />
        <IoMdHeartEmpty size={32} />

        <NavLink to={'/profile/threads/1'} className={'link'}>
          <RxAvatar size={32} />
        </NavLink>
      </Stack>
    </>
  )
}

export default Navbar