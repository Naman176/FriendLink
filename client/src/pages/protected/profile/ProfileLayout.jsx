import { Avatar, AvatarGroup, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileModal } from '../../../redux/slice'


const ProfileLayout = () => {

    const _450 = useMediaQuery("(min-width:450px)")
    const _550 = useMediaQuery("(min-width:550px)")
    const _700 = useMediaQuery("(min-width:700px)")

    const { darkMode } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const handleEditProfile = () => {
        dispatch(editProfileModal(true))
    }

    return (
        <>
            <Stack flexDirection={"column"} p={2} gap={2} width={"50%"} mx={"auto"} my={5}>
                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Stack flexDirection={"column"}>
                            <Typography variant='h4' fontSize={_700 ? "2rem" : _550 ? "1.5rem" : "1.1rem"} color={darkMode ? "white" : "black"}>Naman Suhane</Typography>
                            <Typography variant='caption' fontSize={_550 ? "1.1rem" : "0.9rem"} color={darkMode ? "white" : "gray"}>namansuhane174</Typography>
                        </Stack>
                        <Avatar src='' alt='profile-pic' sx={{
                            width: _550 ? 56 : _450 ? 42 : 35,
                            height: _550 ? 56 : _450 ? 42 : 35
                        }} />
                    </Stack>

                    <Typography variant='subtitle1' fontSize={"1.2rem"} color={darkMode ? "white" : "gray"}>Bio</Typography>

                    {_700 ? <Stack flexDirection={"row"} width={"50%"} gap={1}>
                        <AvatarGroup total={3} sx={{
                            "& .MuiAvatar-root": {
                                width: 24,
                                height: 24,
                                fontSize: 12
                            }
                        }}>
                            <Avatar src='' alt='comment-count' />
                        </AvatarGroup>
                        <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={"1rem"}>2 followers</Typography>
                    </Stack>
                        :
                        <Stack flexDirection={"column"} alignItems={"flex-start"} width={"50%"} gap={1}>
                            <AvatarGroup total={3} sx={{
                                "& .MuiAvatar-root": {
                                    width: 24,
                                    height: 24,
                                    fontSize: 12
                                }
                            }}>
                                <Avatar src='' alt='comment-count' />
                            </AvatarGroup>
                            <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={"1rem"}>2 followers</Typography>
                        </Stack>}
                </Stack>

                <Button variant='outlined' sx={{
                    color: darkMode ? "white" : "black",
                    borderColor: darkMode ? "white" : "black",
                    ":hover": {
                        bgcolor: darkMode ? "white" : "black",
                        color: darkMode ? "black" : "white"
                    }
                }} onClick={handleEditProfile}>Edit Profile</Button>

                <Stack flexDirection={"row"} justifyContent={"space-around"} my={1} paddingBottom={1} color={darkMode ? "white" : "black"}
                borderBottom={`1px solid ${darkMode ? "white" : "gray"}`} fontSize={_550 ? "1.2rem" : _450 ? "1rem" : "0.9rem"}>
                    <NavLink to={'/profile/threads/1'} className={darkMode ? 'darklink' : 'link'}>Threads</NavLink>
                    <NavLink to={'/profile/replies/1'} className={darkMode ? 'darklink' : 'link'}>Replies</NavLink>
                    <NavLink to={'/profile/reposts/1'} className={darkMode ? 'darklink' : 'link'}>Repost</NavLink>
                    {/* <NavLink to={'/profile/threads/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Threads</NavLink> */}
                    {/* <NavLink to={'/profile/replies/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Replies</NavLink> */}
                    {/* <NavLink to={'/profile/reposts/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Repost</NavLink> */}
                </Stack>
            </Stack>
            <Outlet />
        </>
    )
}

export default ProfileLayout