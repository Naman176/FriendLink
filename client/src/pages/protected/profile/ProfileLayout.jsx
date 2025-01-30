import { Avatar, AvatarGroup, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileModal } from '../../../redux/slice'
import { useFollowUserMutation, useUserDetailsQuery } from '../../../redux/service'
import EditProfile from '../../../components/modals/EditProfile'

const ProfileLayout = () => {

    const _450 = useMediaQuery("(min-width:450px)")
    const _550 = useMediaQuery("(min-width:550px)")
    const _700 = useMediaQuery("(min-width:700px)")

    const { darkMode, myInfo } = useSelector((state) => state.service)
    const [isMyAccount, setIsMyAccount] = useState()
    const [isFollowing, setIsFollowing] = useState()

    const params = useParams()
    const dispatch = useDispatch()

    const { data } = useUserDetailsQuery(params?.id)
    const [followUser, followUserData] = useFollowUserMutation()

    const handleEditProfile = () => {
        dispatch(editProfileModal(true))
    }

    const checkIsFollowing = () => {
        if (data && myInfo) {
            const isTrue = data.data.followers.filter((e) => e._id === myInfo._id)
            if (isTrue.length > 0) {
                setIsFollowing(true)
                return
            }
            setIsFollowing(false)
        }
    }

    const handleIsMyAccount = () => {
        if (data && myInfo) {
            const isTrue = data.data._id === myInfo._id
            setIsMyAccount(isTrue)
        }
    }

    const handleFollowUser = async () => {
        if (data) {
            await followUser(data.data._id)
        }
    }

    useEffect(() => {
        if (followUserData.isSuccess) {
            console.log(followUserData.data);
        }
        if (followUserData.isError) {
            console.log(followUserData.error.data);
        }
    }, [followUserData.isSuccess, followUserData.isError])

    useEffect(() => {
        checkIsFollowing()
        handleIsMyAccount()
    }, [data])

    return (
        <>
            <Stack flexDirection={"column"} p={2} gap={2} width={"50%"} mx={"auto"} marginTop={5} marginBottom={1}>
                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Stack flexDirection={"column"}>
                            <Typography variant='h4' fontSize={_700 ? "2rem" : _550 ? "1.5rem" : "1.1rem"} color={darkMode ? "white" : "black"}>{data ? data.data ? data.data.userName : "" : ""}</Typography>
                            <Typography variant='caption' fontSize={_550 ? "1.1rem" : "0.9rem"} color={darkMode ? "white" : "gray"}>{data ? data.data ? data.data.email : "" : ""}</Typography>
                        </Stack>
                        <Avatar
                            src={data ? data.data ? data.data.profilePicture : "" : ""}
                            alt={data ? data.data ? data.data.userName : "" : ""}
                            sx={{
                                width: _550 ? 56 : _450 ? 42 : 35,
                                height: _550 ? 56 : _450 ? 42 : 35
                            }} />
                    </Stack>

                    <Typography variant='subtitle1' fontSize={"1.2rem"} color={darkMode ? "white" : "gray"}>{data ? data.data ? data.data.bio : "" : ""}</Typography>

                    {_700 ?
                        <Stack flexDirection={"row"} width={"50%"} gap={1}>
                            {
                                data ? data.data ? data.data.followers.length > 0 ?
                                    <AvatarGroup total={3} sx={{
                                        "& .MuiAvatar-root": {
                                            width: 24,
                                            height: 24,
                                            fontSize: 12
                                        }
                                    }}>
                                        <Avatar src='' alt='comment-count' />
                                    </AvatarGroup>
                                    : null : null : null
                            }
                            <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={"1rem"}>{data ? data.data ? data.data.followers.length : "" : ""} followers</Typography>
                        </Stack>
                        :
                        <Stack flexDirection={"column"} alignItems={"flex-start"} width={"50%"} gap={1}>
                            {
                                data ? data.data ? data.data.followers.length > 0 ?
                                    <AvatarGroup total={3} sx={{
                                        "& .MuiAvatar-root": {
                                            width: 24,
                                            height: 24,
                                            fontSize: 12
                                        }
                                    }}>
                                        <Avatar src='' alt='comment-count' />
                                    </AvatarGroup>
                                    : null : null : null
                            }
                            <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={"1rem"}>{data ? data.data ? data.data.followers.length : "" : ""} followers</Typography>
                        </Stack>
                    }
                </Stack>

                <Button variant='outlined' sx={{
                    color: darkMode ? "white" : "black",
                    borderColor: darkMode ? "white" : "black",
                    ":hover": {
                        bgcolor: darkMode ? "white" : "black",
                        color: darkMode ? "black" : "white"
                    }
                }} onClick={isMyAccount ? handleEditProfile : handleFollowUser}>
                    {isMyAccount ? "Edit Profile" : isFollowing ? "Unfollow" : "Follow"}
                </Button>

                <Stack flexDirection={"row"} justifyContent={"space-around"} marginTop={1} paddingBottom={1} color={darkMode ? "white" : "black"}
                    borderBottom={`1px solid ${darkMode ? "white" : "gray"}`} fontSize={_550 ? "1.2rem" : _450 ? "1rem" : "0.9rem"}>
                    <NavLink to={`/profile/threads/${data?.data._id}`} className={darkMode ? 'darklink' : 'link'}>Threads</NavLink>
                    <NavLink to={`/profile/replies/${data?.data._id}`} className={darkMode ? 'darklink' : 'link'}>Replies</NavLink>
                    <NavLink to={`/profile/reposts/${data?.data._id}`} className={darkMode ? 'darklink' : 'link'}>Repost</NavLink>
                    {/* <NavLink to={'/profile/threads/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Threads</NavLink> */}
                    {/* <NavLink to={'/profile/replies/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Replies</NavLink> */}
                    {/* <NavLink to={'/profile/reposts/1'} className='link' style={({isActive}) => ({backgroundColor: isActive? 'black':'white', padding:"10%"})}>Repost</NavLink> */}
                </Stack>
            </Stack>
            <Outlet />
            <EditProfile />
        </>
    )
}

export default ProfileLayout