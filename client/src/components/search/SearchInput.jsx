import React from 'react'
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

const SearchInput = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

    return (
        <>
            <TextField
                sx={{
                    width: "90%",
                    height: _450 ? "auto" : "50px",
                    maxWidth: "750px",
                    boxShadow: `5px 5px 5px ${darkMode ? "white" : "gray"}`,
                    borderRadius: "15px",
                    px: _450 ? 2 : 1,
                    py: _450 ? 1 : 0,
                    my: _850 ? 5 : _450 ? 3 : 2,
                    mx: "auto",
                    "& .MuiOutlinedInput-root": {
                        color: darkMode ? 'white' : 'black',
                        "& fieldset": {
                            border: "none"
                        }
                    }
                }}
                placeholder='Search User'
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start" sx={{color: darkMode ? "white" : "black"}}> 
                                <FaSearch />
                            </InputAdornment>
                        )
                    },
                }}
            >
            </TextField>
        </>
    )
}

export default SearchInput