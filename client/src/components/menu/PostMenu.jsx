import { Menu, MenuItem } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postMenuBar } from '../../redux/slice'
import { useDeletePostMutation } from '../../redux/service'
import { Bounce, toast } from 'react-toastify'

const MainMenu = () => {

    const { openPostMenu, postId } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const [deletePost, deletePostData] = useDeletePostMutation()



    const handleClose = () => {
        dispatch(postMenuBar(null))
    }
    const handleDelete = async () => {
        handleClose()
        await deletePost(postId)
    }

    useEffect(() => {
        if (deletePostData.isSuccess) {
            toast.warning(deletePostData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(deletePostData.data);
        }
        if (deletePostData.isError) {
            toast.error(deletePostData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
            console.log(deletePostData.error.data);
        }
    }, [deletePostData.isSuccess, deletePostData.isError])

    return (
        <>
            <Menu anchorEl={openPostMenu} open={openPostMenu !== null ? true : false} onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu