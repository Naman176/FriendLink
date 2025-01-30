import { Menu, MenuItem } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addMyInfo, mainMenuBar, toggleTheme } from '../../redux/slice'
import { useLogoutMeMutation } from '../../redux/service'
import { Bounce, toast } from 'react-toastify'

const MainMenu = () => {

    const { openMainMenu, darkMode, myInfo } = useSelector((state) => state.service)
    const [logoutMe, logoutMeData] = useLogoutMeMutation()

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(mainMenuBar(null))
    }
    const handleToggleTheme = () => {
        handleClose()
        dispatch(toggleTheme())
    }
    const handleLogout = async () => {
        handleClose()
        await logoutMe()
    }

    useEffect(() => {
        if (logoutMeData.isSuccess) {
            if (darkMode) {
                dispatch(toggleTheme())
            }
            dispatch(addMyInfo(null))
            // window.location.reload()
            toast.warning(logoutMeData.data.message, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
        }
        if (logoutMeData.isError) {
            toast.error(logoutMeData.error.data.error, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
                transition: Bounce,
            })
        }
    }, [logoutMeData.isSuccess, logoutMeData.isError])

    return (
        <>
            <Menu anchorEl={openMainMenu} open={openMainMenu !== null ? true : false} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
                <NavLink to={`/profile/threads/${myInfo?._id}`} className='link'>
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu