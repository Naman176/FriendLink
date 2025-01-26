import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { mainMenuBar, toggleTheme } from '../../redux/slice'

const MainMenu = () => {

    const { openMainMenu } = useSelector((state) => state.service)

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(mainMenuBar(null))
    }
    const handleToggleTheme = () => {
        handleClose()
        dispatch(toggleTheme())
    }
    const handleLogout = () => { }

    return (
        <>
            <Menu anchorEl={openMainMenu} open={openMainMenu !== null ? true : false} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
                <NavLink to={'/profile/threads/2'} className='link'>
                    <MenuItem>My Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu