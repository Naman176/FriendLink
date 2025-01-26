import { Avatar, AvatarGroup, Badge, Stack, Stepper, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const PostOne = () => {

    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

  return (
    <>
        <Stack flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Badge 
                anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                badgeContent={
                    <Avatar src='' alt='badge' sx={{
                        width: _450 ? 20 : 15,
                        height: _450 ? 20 : 15,
                        bgcolor: "black",
                        position: "relative",
                        right: 7,
                        bottom: 7
                    }}>+</Avatar>
                }
            >
                <Avatar src='' alt='' sx={{
                    width: _450 ? 40 : 36,
                    height: _450 ? 40 : 36
                }}/>
            </Badge>

            {/* <Stack flexDirection={"column"} alignItems={"center"} gap={2} height={"100%"}> */}
                <Stepper orientation='vertical' activeStep={0} sx={{
                    border: _450 ? `0.1rem solid ${darkMode ? "white" : "gray"}` : `0.05rem solid ${darkMode ? "white" : "gray"}`,
                    width: '0px',
                    height: "100%"
                }}>
                </Stepper>
                
                <AvatarGroup total={3} sx={{    // max{3}
                    "& .MuiAvatar-root": {
                        width: _450 ? 24 : 20,
                        height: _450 ? 24 : 20,
                        fontSize: 12
                    }
                }}>
                    <Avatar src='' alt='comment-count'/>
                </AvatarGroup>
            {/* </Stack> */}

        </Stack>
    </>
  )
}

export default PostOne