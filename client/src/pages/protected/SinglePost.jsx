import { Stack, TextField, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../components/home/Post'
import Comments from '../../components/home/post/Comments'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation, useSinglePostQuery } from '../../redux/service'

const SinglePost = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const params = useParams()
    const { darkMode } = useSelector((state) => state.service)

    const [comment, setComment] = useState("")

    const { data, refetch } = useSinglePostQuery(params?.id)
    const [addComment, addCommentData] = useAddCommentMutation()

    const handleAddComment = async (e) => {
        if (data && e.key === "ENTER") {
            const info = {
                id: data.data._id,
                text: comment,
            }
            await addComment(info)
        }
    }

    useEffect(() => {
        if (addCommentData.isSuccess) {
            setComment()
            refetch()
            console.log(addCommentData.data);
        }
        if (addCommentData.isError) {
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
                value={comment ? comment : ""}/>
            </Stack>
        </>
    )
}

export default SinglePost