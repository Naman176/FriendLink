import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaRegImages } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

const AddPost = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")


    const [text, setText] = useState()
    const [media, setMedia] = useState()
    const mediaRef = useRef()

    const handleClose = () => { }
    const handlePost = () => { }

    const handleMediaRef = () => {
        mediaRef.current.click()
    }

    return (
        <Dialog open={false} onClose={handleClose} fullWidth fullScreen={_850 ? false : true}>
            <Box position={'absolute'} top={18} right={20} onclick={handleClose}>
                <RxCross2 size={28} />
            </Box>
            <DialogTitle textAlign={"center"}>
                New Thread
            </DialogTitle>
            <DialogContent>
                <Stack flexDirection={"row"} gap={2} mb={2}>
                    <Avatar src='' alt='' />
                    <Stack flexDirection={"column"} gap={2} width={"100%"} my={0.5}>
                        <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}>namansuhane174</Typography>
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
                        <FaRegImages size={28} onClick={handleMediaRef} />
                        <input type='file' accept='image/*' style={{display:"none"}} ref={mediaRef} onChange={(e) => setMedia(e.target.files[0])} />
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
        </Dialog>
    )
}

export default AddPost