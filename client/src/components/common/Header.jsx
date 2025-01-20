import React from 'react'
import { Stack, useMediaQuery } from "@mui/material"
import Navbar from './Navbar'
import { IoMenu } from "react-icons/io5";

const Header = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    return (
        <>
            {
                _850 ? <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    height={54} alignItems={"center"}
                    top={0}
                    py={1}
                    px={2}
                    position={"sticky"}>

                    <img src="/friendlink-high-resolution-logo.png" alt="Logo" width={160} height={48} />

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
                </Stack> : 
                <>
                    <Stack position={"fixed"} bottom={0} justifyContent={"center"} width={"100%"} height={52} p={1} bgcolor={"aliceblue"} zIndex={2}>
                        <Navbar/>
                    </Stack>
                    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <img src="/friendlink-high-resolution-logo.png" alt="Logo" width={_450 ? "40%" : 170} height={"10%"} />
                    </Stack>
                    <Stack position={"absolute"} right={0} m={1}>
                        <IoMenu size={_450 ? 30 : 24} className='sidebar-img' />
                    </Stack>
                </>
            }
        </>
    )
}

export default Header