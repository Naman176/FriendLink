import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { FaRegImages } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { addPostModal } from '../../redux/slice'
import { useAddPostMutation } from '../../redux/service'
import Loading from '../common/Loading'

const AddPost = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")


    const [text, setText] = useState()
    const [media, setMedia] = useState()
    const mediaRef = useRef()
    const dispatch = useDispatch()
    const { openAddPostModal, myInfo } = useSelector((state) => state.service)

    const [addNewPost, addNewPostData] = useAddPostMutation()

    const handleClose = () => {
        dispatch(addPostModal(false))
    }
    const handlePost = async () => {
        const data = new FormData()
        if (text) {
            data.append('text', text)
        }
        if (media) {
            data.append('media', media)
        }
        await addNewPost(data)
    }

    useEffect(() => {
        if (addNewPostData.isSuccess) {
            setText()
            setMedia()
            dispatch(addPostModal(false))
            console.log(addNewPostData.data);
        }
        if (addNewPostData.isError) {
            console.log(addNewPostData.error.data);
        }
    }, [addNewPostData.isSuccess, addNewPostData.isError])

    const handleMediaRef = () => {
        mediaRef.current.click()
    }

    if (addNewPostData.isLoading) {
        return <Loading />
    }

    return (
        <>
            <Dialog open={openAddPostModal} onClose={handleClose} fullWidth fullScreen={_850 ? false : true}>
                {
                    addNewPostData.isLoading ?
                        <Stack height={"60vh"}>
                            <Loading />
                        </Stack>
                        :
                        <>
                            <Box position={'absolute'} top={18} right={20} onClick={handleClose} sx={{
                                ":hover": {
                                    cursor: "pointer"
                                }
                            }}>
                                <RxCross2 size={28} />
                            </Box>
                            <DialogTitle textAlign={"center"}>
                                New Thread
                            </DialogTitle>
                            <DialogContent>
                                <Stack flexDirection={"row"} gap={2} mb={2}>
                                    <Avatar
                                        src={myInfo ? myInfo.profilePicture : ""}
                                        alt={myInfo ? myInfo.userName : ""}
                                    />
                                    <Stack flexDirection={"column"} gap={2} width={"100%"} my={0.5}>
                                        <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}>{myInfo ? myInfo.userName : ""}</Typography>
                                        <TextField variant='outlined' multiline maxRows={4} fullWidth placeholder='Start a thread' sx={{
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
                                            onChange={(e) => setText(e.target.value)} />
                                        {
                                            media ? <img src={URL.createObjectURL(media)} alt='' id='url-img' width={_450 ? 300 : 200} height={_450 ? 300 : 200} /> : null
                                        }
                                        <span style={{ width: "fit-content" }}>
                                            <FaRegImages size={28} onClick={handleMediaRef} />
                                        </span>
                                        <input type='file' accept='image/*' style={{ display: "none" }} ref={mediaRef} onChange={(e) => setMedia(e.target.files[0])} />
                                    </Stack>
                                </Stack>
                                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography variant='h6' fontSize={"1rem"} color='gray'>Anyone can reply</Typography>
                                    <Button variant='contained' sx={{
                                        bgcolor: "gray",
                                        color: "white",
                                        ":hover": {
                                            bgcolor: "black"
                                        }
                                    }} onClick={handlePost}>
                                        POST
                                    </Button>
                                </Stack>
                            </DialogContent>
                        </>
                }
            </Dialog>
        </>

    )
}

export default AddPost