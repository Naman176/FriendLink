import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postMenuBar } from '../../redux/slice'

const MainMenu = () => {

    const { openPostMenu } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(postMenuBar(null))
    }
    const handleDelete = () => { }

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