import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {

    const handleClose = () => { }
    const handleToggleTheme = () => { }
    const handleLogout = () => { }

    return (
        <>
            <Menu anchorEl={""} open={false} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
                <NavLink to={'/profile/treads/2'} className='link'>
                    <MenuItem>My Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu