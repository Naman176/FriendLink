import { Avatar, AvatarGroup, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <>
        <Stack flexDirection={"column"} p={2} gap={2} width={"50%"} mx={"auto"} my={5}>
            <Stack flexDirection={"column"} gap={1}>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack flexDirection={"column"}>
                        <Typography variant='h4'>Naman Suhane</Typography>
                        <Typography variant='caption' fontSize={"1.1rem"} color='gray'>namansuhane174</Typography>
                    </Stack>
                    <Avatar src='' alt='profile-pic' sx={{
                        width: 56,
                        height: 56
                    }}/>
                </Stack>

                <Typography variant='subtitle1' fontSize={"1.2rem"} color='gray'>Bio</Typography>

                <Stack flexDirection={"row"} width={"50%"} gap={1}>
                    <AvatarGroup total={3} sx={{
                        "& .MuiAvatar-root": {
                            width: 24,
                            height: 24,
                            fontSize: 12
                        }
                    }}>
                        <Avatar src='' alt='comment-count'/>
                    </AvatarGroup>
                    <Typography variant='caption' color='gray' fontSize={"1rem"}>2 followers</Typography>
                </Stack>
            </Stack>

            <Button variant='outlined' sx={{
                color: "black",
                borderColor: "black",
                ":hover": {
                    bgcolor: "black",
                    color: "white"
                }
            }}>Edit Profile</Button>

            <Stack flexDirection={"row"} justifyContent={"space-around"} my={1} paddingBottom={1} borderBottom={"1px solid gray"} fontSize={"1.2rem"}>
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