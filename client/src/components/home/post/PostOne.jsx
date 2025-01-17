import { Avatar, AvatarGroup, Badge, Stack, Stepper } from '@mui/material'
import React from 'react'

const PostOne = () => {
  return (
    <>
        <Stack flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Badge 
                anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                badgeContent={
                    <Avatar src='' alt='badge' sx={{
                        width: 20,
                        height: 20,
                        bgcolor: "black",
                        position: "relative",
                        right: 7,
                        bottom: 7
                    }}>+</Avatar>
                }
            >
                <Avatar src='' alt='' sx={{
                    width: 40,
                    height: 40
                }}/>
            </Badge>

            {/* <Stack flexDirection={"column"} alignItems={"center"} gap={2} height={"100%"}> */}
                <Stepper orientation='vertical' activeStep={0} sx={{
                    border: "0.1rem solid gray",
                    width: '0px',
                    height: "100%"
                }}>
                </Stepper>
                
                <AvatarGroup total={3} sx={{    // max{3}
                    "& .MuiAvatar-root": {
                        width: 24,
                        height: 24,
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