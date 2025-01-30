import { Avatar, AvatarGroup, Badge, Stack, Stepper, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const PostOne = ({ e }) => {

    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

    return (
        <>
            <Stack flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
                <NavLink to={`/profile/threads/${e?.admin._id}`}>
                    <Badge
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <Avatar src='' alt='badge' sx={{
                                width: _450 ? 20 : 15,
                                height: _450 ? 20 : 15,
                                bgcolor: "black",
                                position: "relative",
                                right: 5,
                                bottom: 7
                            }}>+</Avatar>
                        }
                    >
                        <Avatar
                            src={e ? e.admin.profilePicture : 'https://res.cloudinary.com/dm6dtkgtu/image/upload/b_rgb:FFFFFF/c_crop,w_600,h_600/v1738147510/blank_profile_pic_lttwrz.avif'}
                            alt={e ? e.admin.profilePicture : 'https://res.cloudinary.com/dm6dtkgtu/image/upload/b_rgb:FFFFFF/c_crop,w_600,h_600/v1738147510/blank_profile_pic_lttwrz.avif'}
                            sx={{
                                width: _450 ? 40 : 36,
                                height: _450 ? 40 : 36
                            }} />
                    </Badge>
                </NavLink>

                {/* <Stack flexDirection={"column"} alignItems={"center"} gap={2} height={"100%"}> */}
                <Stepper orientation='vertical' activeStep={0} sx={{
                    border: _450 ? `0.1rem solid ${darkMode ? "white" : "gray"}` : `0.05rem solid ${darkMode ? "white" : "gray"}`,
                    width: '0px',
                    height: "100%"
                }}>
                </Stepper>

                {
                    e ? e.comments.length > 0 ?
                        <AvatarGroup total={e.comments.length} sx={{    // max{3}
                            "& .MuiAvatar-root": {
                                width: _450 ? 24 : 20,
                                height: _450 ? 24 : 20,
                                fontSize: 12
                            }
                        }}>
                            <Avatar src={e?.comments[0].admin.profilePicture}
                                alt={e?.comments[0].admin.userName} />
                            {
                                e.comments.length > 1 ?
                                    <Avatar src={e?.comments[1].admin.profilePicture}
                                        alt={e?.comments[1].admin.userName} />
                                    : null
                            }
                        </AvatarGroup>
                        : "" : ""
                }
                {/* </Stack> */}

            </Stack>
        </>
    )
}

export default PostOne