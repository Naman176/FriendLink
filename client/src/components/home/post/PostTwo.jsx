import { Stack, Typography, useMediaQuery } from '@mui/material'
import { FaRegHeart, FaRegComment, FaRetweet, FaHeart } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLikePostMutation, useRepostMutation } from '../../../redux/service';
import { Bounce, toast } from 'react-toastify'

const PostTwo = ({ e }) => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _600 = useMediaQuery("(min-width:600px)")
    const _500 = useMediaQuery("(min-width:500px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode, myInfo } = useSelector((state) => state.service)

    const [isLike, setIsLike] = useState(false)

    const [likePost] = useLikePostMutation()
    const [repost, repostData] = useRepostMutation()

    const handleLikeClick = async () => {
        await likePost(e?._id)
    }

    const checkIsLiked = () => {
        if (e?.likes.length > 0) {
            const check = e.likes.filter((ele) => ele._id === myInfo?._id)
            if (check.length > 0) {
                setIsLike(true)
                return
            }
        }
        setIsLike(false)
    }

    useEffect(() => {
        checkIsLiked()
    }, [e])

    const handleRepostClick = async () => {
        await repost(e?._id)
    }

    useEffect(() => {
        if (repostData.isSuccess) {
            toast.success(repostData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(repostData.data)
        }
        if (repostData.isError) {
            toast.error(repostData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
              })
            console.log(repostData.error.data)
        }
    }, [repostData.isSuccess, repostData.isError])

    return (
        <>
            <Stack flexDirection={"column"} justifyContent={"space-between"}>

                <Stack flexDirection={"column"} gap={_450 ? 2 : 1}>
                    <Stack flexDirection={"column"}>
                        <Typography color={darkMode ? "white" : "black"} variant='h6' fontWeight={"bold"} fontSize={_850 ? "1.1rem" : _450 ? "1rem" : "0.9rem"}>
                            {e ? e.admin.userName : ""}
                        </Typography>

                        <NavLink to={`/post/${e?._id}`} className={'link'}>
                            <Typography color={darkMode ? "white" : "black"} variant='h5' fontSize={_850 ? "1.2rem" : _450 ? "1rem" : "0.9rem"}>
                                {e ? e.text : ""}
                            </Typography>
                        </NavLink>
                    </Stack>

                    {
                        e ? e.media ?
                            <img src={e.media} alt="post-img" loading='lazy'
                                width={_850 ? "400px" : _600 ? "350px" : _500 ? "300px" : _450 ? "250px" : "200px"} height={"auto"} />
                            : null : null
                    }
                </Stack>

                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} gap={2} m={1}>
                        {
                            isLike ?
                                <FaHeart size={_850 ? 26 : _450 ? 24 : 22} color={darkMode ? "white" : "black"} onClick={handleLikeClick} />
                                :
                                <FaRegHeart size={_850 ? 26 : _450 ? 24 : 22} color={darkMode ? "white" : "black"} onClick={handleLikeClick} />
                        }

                        <NavLink to={`/post/${e?._id}#comment`} className={'link'}>
                            <FaRegComment size={_850 ? 26 : _450 ? 24 : 22} color={darkMode ? "white" : "black"} />
                        </NavLink>

                        <FaRetweet size={_850 ? 26 : _450 ? 24 : 22} color={darkMode ? "white" : "black"} onClick={handleRepostClick} />

                        <IoMdSend size={_850 ? 26 : _450 ? 24 : 22} color={darkMode ? "white" : "black"} />
                    </Stack>

                    <Stack flexDirection={"row"} gap={1} position={"relative"} top={_450 ? 0 : 3} left={4} mx={1}>
                        <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={_600 ? "1.1rem" : "0.9rem"}>{e?.likes.length} Likes .</Typography>
                        <Typography variant='caption' color={darkMode ? "white" : "gray"} fontSize={_600 ? "1.1rem" : "0.9rem"}>{e?.comments.length} Comment</Typography>
                    </Stack>
                </Stack>

            </Stack>
        </>
    )
}

export default PostTwo