import React from 'react'
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    return (
        <>
            <TextField
                sx={{
                    width: "90%",
                    height: _450 ? "auto" : "50px",
                    maxWidth: "750px",
                    boxShadow: "5px 5px 5px gray",
                    borderRadius: "15px",
                    px: _450 ? 2 : 1,
                    py: _450 ? 1 : 0,
                    my: _850 ? 5 : _450 ? 3 : 2,
                    mx: "auto",
                    "& .MuiOutlinedInput-root": {
                        color: 'black',
                        "& fieldset": {
                            border: "none"
                        }
                    }
                }}
                placeholder='Search User'
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start" sx={{color: "black"}}> 
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