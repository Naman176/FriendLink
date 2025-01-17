import React from 'react'
import { Stack } from "@mui/material"
import Navbar from './Navbar'
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                height={54} alignItems={"center"}
                top={0}
                py={1}
                px={2}
                position={"sticky"}
            >

                <img src="/friendlink-high-resolution-logo.png" alt="Logo"
                    width={160}
                    height={48}
                />

                <Stack
                    justifyContent={"center"}
                    width={"550px"}
                    height={96}
                    zIndex={2}
                    bgcolor={'aliceblue'}
                // marginRight={15}
                >
                    <Navbar />
                </Stack>

                <IoMenu size={36} className='sidebar-img' />
            </Stack>
        </>
    )
}

export default Header