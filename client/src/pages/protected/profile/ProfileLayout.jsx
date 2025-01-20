import { Avatar, AvatarGroup, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProfileLayout = () => {

    const _450 = useMediaQuery("(min-width:450px)")
    const _550 = useMediaQuery("(min-width:550px)")
    const _700 = useMediaQuery("(min-width:700px)")

    return (
        <>
            <Stack flexDirection={"column"} p={2} gap={2} width={"50%"} mx={"auto"} my={5}>
                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Stack flexDirection={"column"}>
                            <Typography variant='h4' fontSize={_700 ? "2rem" : _550 ? "1.5rem" : "1.1rem"}>Naman Suhane</Typography>
                            <Typography variant='caption' fontSize={_550 ? "1.1rem" : "0.9rem"} color='gray'>namansuhane174</Typography>
                        </Stack>
                        <Avatar src='' alt='profile-pic' sx={{
                            width: _550 ? 56 : _450 ? 42 : 35,
                            height: _550 ? 56 : _450 ? 42 : 35
                        }} />
                    </Stack>

                    <Typography variant='subtitle1' fontSize={"1.2rem"} color='gray'>Bio</Typography>

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
                        <Typography variant='caption' color='gray' fontSize={"1rem"}>2 followers</Typography>
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
                            <Typography variant='caption' color='gray' fontSize={"1rem"}>2 followers</Typography>
                        </Stack>}
                </Stack>

                <Button variant='outlined' sx={{
                    color: "black",
                    borderColor: "black",
                    ":hover": {
                        bgcolor: "black",
                        color: "white"
                    }
                }}>Edit Profile</Button>

                <Stack flexDirection={"row"} justifyContent={"space-around"} my={1} paddingBottom={1} borderBottom={"1px solid gray"} fontSize={_550 ? "1.2rem" : _450 ? "1rem" : "0.9rem"}>
                    <NavLink to={'/profile/threads/1'} className='link'>Threads</NavLink>
                    <NavLink to={'/profile/replies/1'} className='link'>Replies</NavLink>
                    <NavLink to={'/profile/reposts/1'} className='link'>Repost</NavLink>
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