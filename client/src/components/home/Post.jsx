import { Stack, Typography, useMediaQuery } from '@mui/material'
import { SlOptions } from "react-icons/sl"
import React, { useEffect, useState } from 'react'
import PostOne from './post/PostOne'
import PostTwo from './post/PostTwo'
import { useDispatch, useSelector } from 'react-redux'
import { addPostId, postMenuBar } from '../../redux/slice'

const Post = ({ e }) => {
    
    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const [isAdmin, setIsAdmin] = useState(false)

    const { darkMode, myInfo } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const handlePostMenuBar = (event) => {
        dispatch(addPostId(e._id))
        dispatch(postMenuBar(event.currentTarget))
    }

    const checkIsAdmin = () => {
        if (e.admin._id === myInfo._id) {
            setIsAdmin(true)
            return
        }
        setIsAdmin(false)
    }

    useEffect(() => {
        if (e && myInfo) {
            checkIsAdmin()
        }
    }, [e, myInfo])

    return (
        <>
            <Stack flexDirection={'row'} justifyContent={"space-between"} width={_850 ? "70%" : _450 ? "90%" : "100%"}
                borderBottom={`2px solid ${darkMode ? "white" : "gray"}`} p={_450 ? 2 : 1} mx={'auto'} sx={{
                    ":hover": {
                        cursor: 'pointer',
                        boxShadow: `10px 10px 10px ${darkMode ? "white" : "gray"}`
                    },
                    transition: "all ease-in-out 0.3s"
                }} >

                <Stack flexDirection={'row'} gap={_850 ? 2 : 1}>
                    <PostOne e={e} />
                    <PostTwo e={e} />
                </Stack>

                <Stack flexDirection={'row'} justifyContent={'center'} gap={_850 ? 2 : 1} fontSize={"1rem"} position={"relative"} top={2}>
                    <Typography variant='caption' color={darkMode ? "white" : "black"} fontSize={_850 ? "1rem" : _450 ? "0.9rem" : "0.8rem"}>24h</Typography>
                    <span>
                        {
                            isAdmin ?
                                <SlOptions size={_850 ? 20 : _450 ? 17 : 15} onClick={handlePostMenuBar} color={darkMode ? "white" : "black"} />
                                :
                                <SlOptions size={_850 ? 20 : _450 ? 17 : 15} color={darkMode ? "white" : "black"} />
                        }
                    </span>
                </Stack>
            </Stack>
        </>
    )
}

export default Post