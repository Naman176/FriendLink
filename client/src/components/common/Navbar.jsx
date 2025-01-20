import React from 'react'
import { Stack, useMediaQuery } from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa6';

const Navbar = () => {

  const _300 = useMediaQuery("(min-width:300px)")

  return (
    <>
      <Stack direction={'row'} maxWidth={'100%'} justifyContent={'space-around'} alignItems={'center'}>


        {/* <FaArrowLeft size={_300 ? 28 : 24}/> */}

        <NavLink to={'/'} className={'link'}>
          <GoHome size={_300 ? 28 : 24} />
        </NavLink>

        <NavLink to={'/search'} className={'link'}>
          <IoIosSearch size={_300 ? 28 : 24} />
        </NavLink>

        <TbEdit size={_300 ? 28 : 24} />
        <IoMdHeartEmpty size={_300 ? 28 : 24} />

        <NavLink to={'/profile/threads/1'} className={'link'}>
          <RxAvatar size={_300 ? 28 : 24} />
        </NavLink>
      </Stack>
    </>
  )
}

export default Navbar