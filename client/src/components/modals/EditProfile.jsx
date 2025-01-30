import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileModal } from '../../redux/slice'
import { useParams } from 'react-router-dom'
import { useUpdateProfileMutation, useUserDetailsQuery } from '../../redux/service'
import Loading from '../common/Loading'

const EditProfile = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const [pic, setPic] = useState()
    const [bio, setBio] = useState()
    const { openEditProfileModal, myInfo } = useSelector((state) => state.service)

    const picRef = useRef()
    const dispatch = useDispatch()
    const params = useParams()

    const [updateProfile, updateProfileData] = useUpdateProfileMutation()
    const { refetch } = useUserDetailsQuery(params?.id)

    const handlePicRef = () => {
        picRef.current.click()
    }

    const handleClose = () => {
        dispatch(editProfileModal(false))
    }
    const handleUpdate = async () => {
        if (pic || bio) {
            const data = new FormData()
            if (bio) {
                data.append('text', bio)
            }
            if (pic) {
                data.append('media', pic)
            }
            await updateProfile(data)
        }
        dispatch(editProfileModal(false))
    }

    useEffect(() => {
        if (updateProfileData.isSuccess) {
            refetch()
            console.log(updateProfileData.data);
        }
        if (updateProfileData.isError) {
            console.log(updateProfileData.error.data);
        }
    }, [updateProfileData.isSuccess, updateProfileData.isError])

    return (
        <Dialog open={openEditProfileModal} onClose={handleClose} fullWidth fullScreen={_850 ? false : true}>
            {
                updateProfileData.isLoading ?
                    <Stack height={"60vh"}>
                        <Loading />
                    </Stack>
                    :
                    <>
                        <Box position={"absolute"} top={18} right={20} onClick={handleClose} sx={{
                            ":hover": {
                                cursor: "pointer"
                            }
                        }}>
                            <RxCross2 size={28} />
                        </Box>
                        <DialogTitle textAlign={"center"} mb={2}>
                            Edit Profile
                        </DialogTitle>
                        <DialogContent>
                            <Stack flexDirection={"column"} gap={2} my={1}>
                                <Avatar src={pic ? URL.createObjectURL(pic) : myInfo ? myInfo.profilePicture : ""}
                                    alt={myInfo ? myInfo.userName : ""}
                                    sx={{
                                        width: 96,
                                        height: 96,
                                        alignSelf: "center"
                                    }} />
                                <Button variant='outlined' sx={{
                                    color: "black",
                                    borderColor: "black",
                                    marginBottom: 1,
                                    width: "20%",
                                    mx: "auto",
                                    ":hover": {
                                        bgcolor: "black",
                                        color: "white"
                                    }
                                }} onClick={handlePicRef}>
                                    Change
                                </Button>
                                <input type='file' accept='image/*' style={{ display: "none" }} ref={picRef} onChange={(e) => setPic(e.target.files[0])} />
                            </Stack>
                            <Stack flexDirection={"column"} gap={0.5} my={2}>
                                <Typography variant='subtitle1' fontWeight={"bold"} fontSize={"1.2rem"} >Username</Typography>
                                {/* <input type="text" value={"namansuhane174"} readOnly /> */}
                                <TextField variant='outlined' disabled value={myInfo ? myInfo.userName : ""} />
                            </Stack>
                            <Stack flexDirection={"column"} gap={0.5} my={2}>
                                <Typography variant='subtitle1' fontWeight={"bold"} fontSize={"1.2rem"}>Email</Typography>
                                {/* <input type="text" value={"namansuhane174"} readOnly /> */}
                                <TextField variant='outlined' disabled value={myInfo ? myInfo.email : ""} />
                            </Stack>
                            <Stack flexDirection={"column"} gap={0.5} my={2} mb={2}>
                                <Typography variant='subtitle1' fontWeight={"bold"} fontSize={"1.2rem"}>Bio</Typography>
                                {/* <input type="text" value={"namansuhane174"} placeholder='' onChange={(e) => setBio(e.target.value)} /> */}
                                <TextField variant='outlined' placeholder={myInfo ? myInfo.bio : ""} value={bio ? bio : ""}
                                    sx={{
                                        // readOnly: true,
                                        "& .MuiOutlinedInput-root": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "gray",
                                                borderWidth: "1px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "black",
                                                    borderWidth: "2px",
                                                },
                                            },

                                        },
                                    }}
                                    onChange={(e) => setBio(e.target.value)} />
                            </Stack>
                            <Stack>
                                <Button variant='contained' sx={{
                                    bgcolor: "gray",
                                    color: "white",
                                    ":hover": {
                                        bgcolor: "black"
                                    }
                                }} onClick={handleUpdate}>
                                    Update
                                </Button>
                            </Stack>
                        </DialogContent>
                    </>
            }
        </Dialog>
    )
}

export default EditProfile