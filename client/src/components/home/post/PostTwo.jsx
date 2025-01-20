import { Stack, Typography, useMediaQuery } from '@mui/material'
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import React from 'react'
import { NavLink } from 'react-router-dom';

const PostTwo = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _600 = useMediaQuery("(min-width:600px)")
    const _500 = useMediaQuery("(min-width:500px)")
    const _450 = useMediaQuery("(min-width:450px)")

    return (
        <>
            <Stack flexDirection={"column"} justifyContent={"space-between"}>

                <Stack flexDirection={"column"} gap={_450 ? 2 : 1}>
                    <Stack flexDirection={"column"}>
                        <Typography variant='h6' fontWeight={"bold"} fontSize={_850 ? "1.1rem" : _450 ? "1rem" : "0.9rem"}>
                            Naman Suhane
                        </Typography>

                        <NavLink to={'/post/2'} className={'link'}>
                            <Typography variant='h5' fontSize={_850 ? "1.3rem" : _450 ? "1.1rem" : "1rem"}>
                                This is the caption for welcome post
                            </Typography>
                        </NavLink>
                    </Stack>
                    <img src="/IMG_20230620_024250.jpg" alt="post-img" loading='lazy'
                        width={_850 ? "400px" : _600 ? "350px" : _500 ? "300px" : _450 ? "250px" : "200px"} height={"auto"} />
                </Stack>

                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} gap={2} m={1}>
                        <FaRegHeart size={_850 ? 28 : _450 ? 26 : 22} />
                        <FaRegComment size={_850 ? 28 : _450 ? 26 : 22} />
                        <FaRetweet size={_850 ? 28 : _450 ? 26 : 22} />
                        <IoMdSend size={_850 ? 28 : _450 ? 26 : 22} />
                    </Stack>

                    <Stack flexDirection={"row"} gap={1} position={"relative"} top={_450 ? 0 : 3} left={4} mx={1}>
                        <Typography variant='caption' color='gray' fontSize={_600 ? "1.1rem" : "0.9rem"}>2 Likes .</Typography>
                        <Typography variant='caption' color='gray' fontSize={_600 ? "1.1rem" : "0.9rem"}>1 Comment</Typography>
                    </Stack>
                </Stack>

            </Stack>
        </>
    )
}

export default PostTwo