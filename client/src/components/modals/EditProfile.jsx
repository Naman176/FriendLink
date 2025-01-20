import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const EditProfile = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const [pic, setPic] = useState()
    const [bio, setBio] = useState()

    const picRef = useRef()

    const handlePicRef = () => {
        picRef.current.click()
    }

    const handleClose = () => { }
    const handleUpdate = () => { }

    return (
        <>
            <Dialog open={false} onClose={handleClose} fullWidth fullScreen={_850 ? false : true}>
                <Box position={"absolute"} top={18} right={20} onClick={handleClose}>
                    <RxCross2 size={28} />
                </Box>
                <DialogTitle textAlign={"center"} mb={2}>
                    Edit Profile
                </DialogTitle>
                <DialogContent>
                    <Stack flexDirection={"column"} gap={2} my={1}>
                        <Avatar src={pic ? URL.createObjectURL(pic) : ""} alt='' sx={{
                            width: 96,
                            height: 96,
                            alignSelf: "center"
                        }} />
                        <Button variant='outlined' sx={{
                            color: "black",
                            borderColor: "black",
                            marginBottom: 1,
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
                        <TextField variant='outlined' value={"namansuhane174"} sx={{
                            readOnly: true,
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
                        }} />
                    </Stack>
                    <Stack flexDirection={"column"} gap={0.5} my={2}>
                        <Typography variant='subtitle1' fontWeight={"bold"} fontSize={"1.2rem"}>Email</Typography>
                        {/* <input type="text" value={"namansuhane174"} readOnly /> */}
                        <TextField variant='outlined' value={"namansuhane174"} sx={{
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
                        }} />
                    </Stack>
                    <Stack flexDirection={"column"} gap={0.5} my={2} mb={2}>
                        <Typography variant='subtitle1' fontWeight={"bold"} fontSize={"1.2rem"}>Bio</Typography>
                        {/* <input type="text" value={"namansuhane174"} placeholder='' onChange={(e) => setBio(e.target.value)} /> */}
                        <TextField variant='outlined' placeholder='' sx={{
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
            </Dialog>
        </>
    )
}

export default EditProfile