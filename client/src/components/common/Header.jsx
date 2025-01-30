import React from 'react'
import { Stack, useMediaQuery } from "@mui/material"
import Navbar from './Navbar'
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { mainMenuBar } from '../../redux/slice';

const Header = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const handleMainMenuBar = (e) => {
        dispatch(mainMenuBar(e.currentTarget))
    }

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
                    {
                        darkMode ? <img src="/friendlink-high-resolution-logo 2.png" alt="Logo" width={160} height={48} />
                            : <img src="/friendlink-high-resolution-logo.png" alt="Logo" width={160} height={48} />
                    }
                    <Stack
                        justifyContent={"center"}
                        width={"550px"}
                        height={96}
                        zIndex={2}
                        bgcolor={darkMode ? "black" : "aliceblue"}
                    // marginRight={15}
                    >
                        <Navbar />
                    </Stack>

                    <span>
                        <IoMenu size={36} className='sidebar-img' onClick={handleMainMenuBar} color={darkMode ? 'white' : 'black'}/>
                    </span>
                </Stack> :
                    <>
                        <Stack position={"fixed"} bottom={0} justifyContent={"center"} width={"100%"} height={52} p={1} 
                        bgcolor={darkMode ? "black" : "aliceblue"} zIndex={2}>
                            <Navbar />
                        </Stack>
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            {
                                darkMode? <img src="/friendlink-high-resolution-logo 2.png" alt="Logo" width={_450 ? "40%" : 170} height={"10%"} />
                                : <img src="/friendlink-high-resolution-logo.png" alt="Logo" width={_450 ? "40%" : 170} height={"10%"} />
                            }
                        </Stack>
                        <Stack position={"absolute"} right={0} m={1}>
                            <IoMenu size={_450 ? 30 : 24} className='sidebar-img' onClick={handleMainMenuBar} color={darkMode ? 'white' : 'black'}/>
                        </Stack>
                    </>
            }
        </>
    )
}

export default Header