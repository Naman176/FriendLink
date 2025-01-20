import { Menu, MenuItem } from '@mui/material'
import React from 'react'

const MainMenu = () => {

    const handleClose = () => { }
    const handleDelete = () => { }

    return (
        <>
            <Menu anchorEl={""} open={true} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu