import { Stack, TextField, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../components/home/Post'
import Comments from '../../components/home/post/Comments'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation, useSinglePostQuery } from '../../redux/service'
import { Bounce, toast } from 'react-toastify'

const SinglePost = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const params = useParams()
    const { darkMode } = useSelector((state) => state.service)

    const [comment, setComment] = useState("")

    const { data, refetch } = useSinglePostQuery(params?.id)
    const [addComment, addCommentData] = useAddCommentMutation()

    const handleAddComment = async (e) => {
        console.log(e);
        
        if (data && e.key === "Enter") {
            const info = {
                id: data.data._id,
                text: comment,
            }
            console.log(info);
            
            await addComment(info)
        }
    }

    useEffect(() => {
        if (addCommentData.isSuccess) {
            setComment()
            refetch()
            toast.success(addCommentData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(addCommentData.data);
        }
        if (addCommentData.isError) {
            toast.error(addCommentData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(addCommentData.error.data);
        }
    }, [addCommentData.isSuccess, addCommentData.isError])



    return (
        <>
            <Stack flexDirection={"column"} gap={2} my={5}>
                <Post e={data?.data} />
                <Stack flexDirection={"column"} gap={2} width={_850 ? "80%" : _450 ? "90%" : "100%"} mx={"auto"}>
                    {
                        data ? data.data?.comments?.length > 0 ?
                            data.data.comments.map((e) => {
                                return <Comments key={e._id} e={e} postId={data?.data._id} />
                            }) : null : null
                    }
                </Stack>
                <TextField variant='outlined' placeholder='Comment Here...' id='comment' sx={{
                    width: "50%",
                    mx: "auto",
                    my: 5,
                    p: 1,
                    "& .MuiOutlinedInput-root": {
                        color: darkMode ? "white" : "black",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkMode ? "white" : "black",
                            borderWidth: "1px",
                        },
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: darkMode ? "white" : "black",
                                borderWidth: "2px",
                            },
                        },
                        "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: darkMode ? "white" : "black",
                            },
                        },
                    },
                }} onChange={(e) => setComment(e.target.value)}
                    onKeyUp={handleAddComment}
                    value={comment ? comment : ""} />
            </Stack>
        </>
    )
}

export default SinglePost